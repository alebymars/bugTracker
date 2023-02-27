import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {UsersService} from "./users.service";
import {UsersController} from "./users.controller";
import {UserSchema} from "./schemas/user.schemas";

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [
        MongooseModule.forFeature([
            {name: 'User', schema: UserSchema}
        ])
    ]
})
export class UsersModule {
}