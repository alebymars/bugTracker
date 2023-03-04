import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {HydratedDocument} from 'mongoose';
import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsNotEmpty} from "class-validator";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop()
    @ApiProperty()
    @IsEmail()
    email: string

    @ApiProperty()
    @Prop()
    @IsNotEmpty()
    password: string

    @ApiProperty()
    @Prop()
    isActivated: boolean

    @ApiProperty()
    @Prop()
    activationLink: string

    @ApiProperty()
    @Prop()
    avatar: string

    @ApiProperty()
    @Prop()
    role: string

    // @Prop()
    // token: string

}

export const UserSchema = SchemaFactory.createForClass(User)