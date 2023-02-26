import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {HydratedDocument} from 'mongoose';

export type ReportDocument = HydratedDocument<Report>;

@Schema()
export class Report {
    @Prop()
    title: string

    @Prop()
    steps: string
}

export const ReportSchema = SchemaFactory.createForClass(Report)