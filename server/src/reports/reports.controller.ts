import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
  Body,
  //   Redirect,
  //   HttpCode,
  //   HttpStatus,
} from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {
  }
  @Get()
  //   @Redirect('https://google.com', 301)
  //   @HttpCode(HttpStatus.CREATED)
  getAll() {
    return this.reportsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id) {
    return this.reportsService.getById(id);
  }

  @Post()
  create(@Body() createReportDto: CreateReportDto) {
    return this.reportsService.create(createReportDto)
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return this.reportsService.delete(id)
  }

  @Put(':id')
  update(@Body() updateReportDto: UpdateReportDto, @Param('id') id: string) {
    return this.reportsService.update(id, updateReportDto)
  }
}
