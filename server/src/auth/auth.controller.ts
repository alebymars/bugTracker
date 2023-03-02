import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {UserLoginDto} from "./dto";
import {AuthUserResponse} from "./response";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post("register")
    registerUsers(@Body() userDto: CreateUserDto): Promise<CreateUserDto> {
        return this.authService.registerUsers(userDto)
    }

    @Post("login")
    login(@Body() userDto: UserLoginDto): Promise<AuthUserResponse> {
        return this.authService.loginUser(userDto)
    }
}
