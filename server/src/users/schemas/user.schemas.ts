import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {HydratedDocument} from 'mongoose';
import {ApiProperty} from "@nestjs/swagger";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop()
    @ApiProperty()
    email: string

    @ApiProperty()
    @Prop()
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