import {ApiProperty} from "@nestjs/swagger";
import {IsEmail} from "class-validator";

export class RemoveUserDto {
    @ApiProperty()
    @IsEmail()
    email: string;

    // @ApiProperty()
    // readonly password: string;

    @ApiProperty()
    isActivated: boolean;

    @ApiProperty()
    activationLink: string;

    @ApiProperty()
    avatar: string;

    @ApiProperty()
    role: string;
}