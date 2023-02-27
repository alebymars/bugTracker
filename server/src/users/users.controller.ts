import {
    Controller,
    Get,
    Param,
    Post,
    Delete,
    Put,
    Body,
} from '@nestjs/common';
import {UsersService} from "./users.service";
import {User} from "./schemas/user.schemas";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";
import {ApiTags} from "@nestjs/swagger";

@ApiTags("Users")
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @Get()
    getAll(): Promise<User[]> {
        return this.usersService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id): Promise<User> {
        return this.usersService.getById(id);
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.create(createUserDto)
    }

    @Delete(':id')
    remove(@Param('id') id): Promise<User> {
        return this.usersService.remove(id)
    }

    @Put(':id')
    update(@Body() updateUserDto: UpdateUserDto, @Param('id') id: string): Promise<User> {
        return this.usersService.update(id, updateUserDto)
    }
}
