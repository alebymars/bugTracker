import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsNotEmpty} from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    password: string;

    @ApiProperty()
    isActivated: boolean;

    @ApiProperty()
    activationLink: string;

    @ApiProperty()
    avatar: string;

    @ApiProperty()
    role: string;
}