import {ApiProperty} from "@nestjs/swagger";

export class UpdateReportDto {
    @ApiProperty()
    userId: string;

    @ApiProperty()
    product: string;

    @ApiProperty()
    issueType: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    steps: string[];

    @ApiProperty()
    actualResult: string;

    @ApiProperty()
    expectedResult: string;

    @ApiProperty()
    tags: string[];

    @ApiProperty()
    priority: string;

    @ApiProperty()
    device: string;

    @ApiProperty()
    os: string;
}
