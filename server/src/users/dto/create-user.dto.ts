import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
    readonly email: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    readonly isActivated: boolean;

    @ApiProperty()
    readonly activationLink: string;

    @ApiProperty()
    readonly avatar: string;

    @ApiProperty()
    readonly role: string;
}