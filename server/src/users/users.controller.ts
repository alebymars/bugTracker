import {
    Controller,
    Get,
    Param,
    Post,
    Delete,
    Put,
    Body, UseGuards,
} from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport";
import {ApiOperation, ApiSecurity, ApiTags} from "@nestjs/swagger";
import {UsersService} from "./users.service";
import {User} from "./schemas/user.schemas";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";

@ApiTags("Users")
@ApiSecurity("X-API-KEY", ["X-API-KEY"])
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @Get()
    @ApiOperation({ summary: "Get info all users" })
    @UseGuards(AuthGuard("api-key"))
    getAll(): Promise<User[]> {
        return this.usersService.getAll();
    }

    @Get(':id')
    @ApiOperation({ summary: "Get info users with id" })
    @UseGuards(AuthGuard("api-key"))
    getOne(@Param('id') id): Promise<User> {
        return this.usersService.getById(id);
    }

    @Post()
    // @UseGuards(AuthGuard("api-key"))
    @ApiOperation({ summary: "Create user" })
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.create(createUserDto)
    }

    @Delete(':id')
    @ApiOperation({ summary: "Delete user with id" })
    remove(@Param('id') id): Promise<User> {
        return this.usersService.remove(id)
    }

    @Put(':id')
    @ApiOperation({ summary: "Update user with id" })
    update(@Body() updateUserDto: UpdateUserDto, @Param('id') id: string): Promise<User> {
        return this.usersService.update(id, updateUserDto)
    }
}
