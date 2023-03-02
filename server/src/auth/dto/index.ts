import {IsString} from "class-validator";

export class UserLoginDto {
    @IsString()
    email: string;
    password: string;
}