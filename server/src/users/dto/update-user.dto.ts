import {ApiProperty} from "@nestjs/swagger";

export class UpdateUserDto {
    @ApiProperty()
    readonly email: string;

    @ApiProperty()
    readonly password: string;

    @ApiProperty()
    readonly isActivated: boolean;

    @ApiProperty()
    readonly activationLink: string;

    @ApiProperty()
    readonly avatar: string;

    @ApiProperty()
    readonly role: string;
}