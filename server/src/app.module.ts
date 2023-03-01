import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ReportsModule} from "./reports/reports.module";
import {UsersModule} from "./users/users.module";
import { AuthorizationModule } from './authorization/authorization.module';

@Module({
  imports: [AuthorizationModule, UsersModule, ReportsModule, MongooseModule.forRoot('mongodb://localhost/bugTrackerNew')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
