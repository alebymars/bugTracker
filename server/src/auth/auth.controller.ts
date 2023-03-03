import {Body, Controller, Post, UseGuards} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {UserLoginDto} from "./dto";
import {AuthUserResponse} from "./response";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {JwtAuthGuard} from "../guards/jwt-guard";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @ApiTags("Auth")
    @ApiResponse({status: 201, type: CreateUserDto, description: 'User created successfully'})
    @Post("register")
    registerUsers(@Body() userDto: CreateUserDto): Promise<CreateUserDto> {
        return this.authService.registerUsers(userDto)
    }

    @ApiTags("Auth")
    @ApiResponse({status: 200, type: AuthUserResponse, description: 'User logged in successfully'})
    @Post("login")
    login(@Body() userDto: UserLoginDto): Promise<AuthUserResponse> {
        return this.authService.loginUser(userDto)
    }

    @UseGuards(JwtAuthGuard)
    @Post("test")
    test() {
        return true
    }
}
