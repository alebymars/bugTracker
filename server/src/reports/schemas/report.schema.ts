import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {HydratedDocument} from 'mongoose';
import {ApiProperty} from "@nestjs/swagger";

export type ReportDocument = HydratedDocument<Report>;

@Schema()
export class Report {
    @Prop()
    @ApiProperty()
    userId: string;

    @Prop()
    @ApiProperty()
    product: string;

    @Prop()
    @ApiProperty()
    issueType: string;

    @Prop()
    @ApiProperty()
    title: string;

    @Prop()
    @ApiProperty()
    steps: string[];

    @Prop()
    @ApiProperty()
    actualResult: string;

    @Prop()
    @ApiProperty()
    expectedResult: string;

    @Prop()
    @ApiProperty()
    tags: string[];

    @Prop()
    @ApiProperty()
    priority: string;

    @Prop()
    @ApiProperty()
    device: string;

    @Prop()
    @ApiProperty()
    os: string;

    @Prop()
    @ApiProperty()
    date: Date;

    @Prop()
    @ApiProperty()
    platform: string;

    @Prop()
    @ApiProperty()
    versionProduct: string;

    @Prop()
    @ApiProperty()
    status: string;

    @Prop()
    @ApiProperty()
    userImage: string;

    @Prop()
    @ApiProperty()
    userEmail: string;
}

export const ReportSchema = SchemaFactory.createForClass(Report)