import {Module} from '@nestjs/common';
import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';
import {UsersModule} from "../users/users.module";
import {TokenModule} from "../token/token.module";
import {JwtStrategy} from "../strategy";
import {ConfigService} from "@nestjs/config";
import {PassportModule} from "@nestjs/passport";

@Module({
    imports: [UsersModule, TokenModule, PassportModule],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy, ConfigService]
})
export class AuthModule {
}
