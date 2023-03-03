import {ApiProperty} from "@nestjs/swagger";

export class UpdateUserDto {
    @ApiProperty()
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