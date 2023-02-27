import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";
import {User} from "./schemas/user.schemas";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<User>) {
    }

    async getAll(): Promise<User[]> {
        return this.userModel.find().exec()
    }

    async getById(id: string): Promise<User> {
        return this.userModel.findById(id).exec()
    }

    async create(userDto: CreateUserDto): Promise<User> {
        const newUser = new this.userModel(userDto)
        return newUser.save()
    }

    async update(id: string, userDto: UpdateUserDto): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, userDto, {new: true}).exec()
    }

    async remove(id: string): Promise<User> {
        return this.userModel.findByIdAndRemove(id).exec()
    }
}