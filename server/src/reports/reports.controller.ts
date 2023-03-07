import {
    Controller,
    Get,
    Param,
    Post,
    Delete,
    Put,
    Body,
    UseGuards,
} from "@nestjs/common";
import {CreateReportDto} from "./dto/create-report.dto";
import {UpdateReportDto} from "./dto/update-report.dto";
import {ReportsService} from "./reports.service";
import {Report} from "./schemas/report.schema";
import {ApiBearerAuth, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {JwtAuthGuard} from "../guards/jwt-guard";
import {RemoveUserDto} from "../users/dto/remove-user.dto";

@ApiTags("Reports")
@ApiBearerAuth()
@Controller("reports")
export class ReportsController {
    constructor(private readonly reportsService: ReportsService) {
    }

    @Get()
    @ApiTags("Reports")
    @UseGuards(JwtAuthGuard)
    @ApiOperation({summary: "Get info all reports"})
    @ApiResponse({status: 200, description: "All reports", type: Report})
    getAll(): Promise<Report[]> {
        return this.reportsService.getAll();
    }

    @Get(":id")
    @ApiTags("Reports")
    @UseGuards(JwtAuthGuard)
    @ApiOperation({summary: "Get info reports with id"})
    @ApiResponse({status: 200, description: "Report with id", type: Report})
    getOne(@Param("id") id: string): Promise<Report> {
        return this.reportsService.getById(id);
    }

    @Post()
    @ApiTags("Reports")
    @UseGuards(JwtAuthGuard)
    @ApiOperation({summary: "Create report"})
    @ApiResponse({status: 200, description: "Report created successfully", type: Report})
    create(@Body() createReportDto: CreateReportDto): Promise<Report> {
        return this.reportsService.create(createReportDto);
    }

    @Delete(":id")
    @ApiTags("Reports")
    @UseGuards(JwtAuthGuard)
    @ApiOperation({summary: "Delete report with id"})
    @ApiResponse({status: 200, description: "Report deleted successfully", type: Report})
    remove(@Param("id") id: string): Promise<Report> {
        return this.reportsService.remove(id);
    }

    @Put(":id")
    @ApiTags("Reports")
    @UseGuards(JwtAuthGuard)
    @ApiOperation({summary: "Update report with id"})
    @ApiResponse({status: 200, description: "Report updated successfully", type: UpdateReportDto})
    update(@Body() updateReportDto: UpdateReportDto, @Param("id") id: string): Promise<Report> {
        return this.reportsService.update(id, updateReportDto);
    }
}
