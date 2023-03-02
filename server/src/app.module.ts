import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ReportsModule} from "./reports/reports.module";
import {UsersModule} from "./users/users.module";
import {AuthorizationModule} from './authorization/authorization.module';
import {AuthModule} from './auth/auth.module';
import {TokenModule} from './token/token.module';
import {JwtService} from "@nestjs/jwt";
import {JwtStrategy} from "./strategy";
import {ConfigService} from "@nestjs/config";

@Module({
    imports: [AuthorizationModule,
        UsersModule,
        ReportsModule,
        MongooseModule.forRoot('mongodb://localhost/bugTrackerNew'),
        AuthModule,
        TokenModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
