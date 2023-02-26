import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ReportsModule} from "./reports/reports.module";

@Module({
  imports: [ReportsModule, MongooseModule.forRoot('mongodb://localhost/bugTrackerNew')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
