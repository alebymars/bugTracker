import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import * as bcrypt from 'bcrypt';
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";
import {User} from "./schemas/user.schemas";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<User>) {
    }

    async hashPassword(password: string) {
        return bcrypt.hash(password, 7)
    }

    async getAll(): Promise<User[]> {
        return this.userModel.find().exec()
    }

    async findOne(email: string) {
        return this.userModel.find({email}).exec()
    }

    async getById(id: string): Promise<User> {
        return this.userModel.findById(id).exec()
    }

    async create(userDto: CreateUserDto): Promise<User> {
        userDto.password = await this.hashPassword(userDto.password)
        await this.userModel.create(userDto)
        return userDto
        // const newUser = new this.userModel(userDto)
        // return newUser.save()
    }

    async update(id: string, userDto: UpdateUserDto): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, userDto, {new: true}).exec()
    }

    async remove(id: string): Promise<User> {
        return this.userModel.findByIdAndRemove(id).exec()
    }
}