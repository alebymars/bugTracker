import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {ReportsService} from "./reports.service";
import {ReportsController} from "./reports.controller";
import {ReportSchema} from "./schemas/report.schema";

@Module({
    controllers: [ReportsController],
    providers: [ReportsService],
    imports: [
        MongooseModule.forFeature([
            {name: 'Report', schema: ReportSchema}
        ])
    ]
})
export class ReportsModule {
}