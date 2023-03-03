import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
    email: string;

    @ApiProperty()
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