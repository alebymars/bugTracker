import {Injectable} from "@nestjs/common";
import {CreateReportDto} from "./dto/create-report.dto";

@Injectable()
export class ReportsService {
    private reports = []

    getAll() {
        return this.reports
    }

    getById(id: string) {
        return this.reports.find(report => report.id === id)
    }

    create(reportDto: CreateReportDto) {
        this.reports.push({
            id: Date.now().toString(),
            ...reportDto
        })
    }

    update(id: string, report) {
        const index = this.reports.findIndex(report => report.id === id)
        this.reports[index] = report
    }

    delete(id: string) {
        const index = this.reports.findIndex(report => report.id === id)
        this.reports.splice(index, 1)
    }
}