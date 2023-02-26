import {Injectable} from "@nestjs/common";
import {CreateReportDto} from "./dto/create-report.dto";
import {Report} from "./schemas/report.schema";
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {UpdateReportDto} from "./dto/update-report.dto";

@Injectable()
export class ReportsService {

    constructor(@InjectModel(Report.name) private reportModel: Model<Report>) {
    }

    async getAll(): Promise<Report[]> {
        return this.reportModel.find().exec()
    }

    async getById(id: string): Promise<Report> {
        return this.reportModel.findById(id).exec()
    }

    async create(reportDto: CreateReportDto): Promise<Report> {
        const newReport = new this.reportModel(reportDto)
        return newReport.save()
    }

    async update(id: string, reportDto: UpdateReportDto): Promise<Report> {
        return this.reportModel.findByIdAndUpdate(id, reportDto, {new: true}).exec()
    }

    async remove(id: string): Promise<Report> {
        return this.reportModel.findByIdAndRemove(id).exec()
    }
}