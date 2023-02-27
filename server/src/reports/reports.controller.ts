import {
    Controller,
    Get,
    Param,
    Post,
    Delete,
    Put,
    Body,
} from '@nestjs/common';
import {CreateReportDto} from './dto/create-report.dto';
import {UpdateReportDto} from './dto/update-report.dto';
import {ReportsService} from './reports.service';
import {Report} from "./schemas/report.schema";
import {ApiTags} from "@nestjs/swagger";

@ApiTags("Reports")
@Controller('reports')
export class ReportsController {
    constructor(private readonly reportsService: ReportsService) {
    }

    @Get()
    //   @Redirect('https://google.com', 301)
    //   @HttpCode(HttpStatus.CREATED)
    getAll(): Promise<Report[]> {
        return this.reportsService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id): Promise<Report> {
        return this.reportsService.getById(id);
    }

    @Post()
    create(@Body() createReportDto: CreateReportDto): Promise<Report> {
        return this.reportsService.create(createReportDto)
    }

    @Delete(':id')
    remove(@Param('id') id): Promise<Report> {
        return this.reportsService.remove(id)
    }

    @Put(':id')
    update(@Body() updateReportDto: UpdateReportDto, @Param('id') id: string): Promise<Report> {
        return this.reportsService.update(id, updateReportDto)
    }
}
