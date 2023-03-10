import {Controller, Get, Post, UseGuards, Request} from '@nestjs/common';
import { AppService } from './app.service';
import {ApiExcludeEndpoint} from "@nestjs/swagger";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  @ApiExcludeEndpoint()
  getHello(): string {
    return 'Hello NestJS!';
  }

}
