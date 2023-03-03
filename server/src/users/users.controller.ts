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
import {ApiOperation, ApiResponse, ApiSecurity, ApiTags} from "@nestjs/swagger";
import {UsersService} from "./users.service";
import {User} from "./schemas/user.schemas";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";
import {JwtAuthGuard} from "../guards/jwt-guard";

@ApiTags("Users")
// @ApiSecurity("X-API-KEY", ["X-API-KEY"])
@ApiSecurity("jwt", ["jwt"])
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @Get()
    @ApiOperation({summary: "Get info all users"})
    // @UseGuards(AuthGuard("api-key"))
    @UseGuards(JwtAuthGuard)
    getAll(): Promise<User[]> {
        return this.usersService.getAll();
    }

    @Get(':id')
    @ApiOperation({summary: "Get info users with id"})
    // @UseGuards(AuthGuard("api-key"))
    getOne(@Param('id') id): Promise<User> {
        return this.usersService.getById(id);
    }

    // @Post()
    // // @UseGuards(AuthGuard("api-key"))
    // @ApiOperation({summary: "Create user"})
    // create(@Body() createUserDto: CreateUserDto): Promise<User> {
    //     // console.log(createUserDto)
    //     return this.usersService.create(createUserDto)
    // }

    @Delete(':id')
    @ApiTags("Users")
    @UseGuards(JwtAuthGuard)
    @ApiResponse({status: 200, type: UpdateUserDto, description: 'User deleted successfully'})
    @ApiOperation({summary: "Delete user with id"})
    remove(@Param('id') id): Promise<User> {
        return this.usersService.remove(id)
    }

    @Put(':id')
    @ApiTags("Users")
    @ApiResponse({status: 200, type: UpdateUserDto, description: 'User updated successfully'})
    @UseGuards(JwtAuthGuard)
    @ApiOperation({summary: "Update user with id"})
    update(@Body() updateUserDto: UpdateUserDto, @Param('id') id: string): Promise<UpdateUserDto> {
        return this.usersService.update(id, updateUserDto)
    }
}
