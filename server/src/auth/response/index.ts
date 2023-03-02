import {IsBoolean, IsString} from "class-validator";

export class AuthUserResponse {
    @IsString()
    email: string;
    @IsString()
    password: string;
    @IsBoolean()
    isActivated: boolean;
    @IsString()
    activationLink: string;
    @IsString()
    avatar: string;
    @IsString()
    role: string;
    @IsString()
    token: string;
}