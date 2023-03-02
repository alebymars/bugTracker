import {IsBoolean, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class AuthUserResponse {
    @IsString()
    @ApiProperty()
    email: string;

    @IsString()
    @ApiProperty()
    password: string;

    @IsBoolean()
    @ApiProperty()
    isActivated: boolean;

    @IsString()
    @ApiProperty()
    activationLink: string;

    @IsString()
    @ApiProperty()
    avatar: string;

    @IsString()
    @ApiProperty()
    role: string;

    @IsString()
    @ApiProperty()
    token: string;
}