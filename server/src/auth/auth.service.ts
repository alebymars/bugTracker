import {BadRequestException, Injectable} from '@nestjs/common';
import * as bcrypt from "bcrypt";
import {UsersService} from "../users/users.service";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {AppError} from "../common/constants/errors";
import {UserLoginDto} from "./dto";
import {AuthUserResponse} from "./response";
import {TokenService} from "../token/token.service";

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly tokenService: TokenService
    ) {
    }

    async registerUsers(userDto: CreateUserDto): Promise<CreateUserDto> {
        const existUser = await this.usersService.findUserByEmail(userDto.email)
        if (existUser) throw new BadRequestException(AppError.USER_EXIST)
        const emailRegexp = new RegExp(
            /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
        )
        if (!emailRegexp.test(userDto.email)) throw new BadRequestException(AppError.WRONG_DATA)
        return this.usersService.create(userDto)
    }

    async loginUser(userDto: UserLoginDto): Promise<AuthUserResponse> {
        const existUser = await this.usersService.findUserByEmail(userDto.email)
        if (!existUser) throw new BadRequestException(AppError.USER_NOT_EXIST)
        const validatePassword = await bcrypt.compare(userDto.password, existUser.password)
        if (!validatePassword) throw new BadRequestException(AppError.WRONG_DATA)
        const token = await this.tokenService.generateJwtToken({
            email: existUser.email,
            role: existUser.role
        })
        const user = await this.usersService.publicUser(userDto.email)
        // console.log({...user, token})
        return {...user, token}
    }
}
