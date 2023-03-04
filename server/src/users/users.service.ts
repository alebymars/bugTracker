import {BadRequestException, Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import * as bcrypt from 'bcrypt';
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";
import {User} from "./schemas/user.schemas";
import {AppError} from "../common/constants/errors";

// import {AppError} from "../common/constants/errors";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<User>) {
    }

    async getAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    // async findOne(email: string) {
    //     return this.userModel.find({email}).exec();
    // }

    async getById(id: string): Promise<User> {
        return this.userModel.findById(id).exec()
    }

    async hashPassword(password: string) {
        return bcrypt.hash(password, 7);
    }

    async findUserByEmail(email: string) {
        return this.userModel.findOne({email}).exec();
    }

    async create(userDto: CreateUserDto): Promise<User> {
        const existUser = await this.findUserByEmail(userDto.email)
        if (existUser) throw new BadRequestException(AppError.USER_EXIST)
        userDto.password = await this.hashPassword(userDto.password)
        await this.userModel.create(userDto)
        return userDto;
        // const newUser = new this.userModel(userDto)
        // return newUser.save()
    }

    async update(id: string, userDto: UpdateUserDto): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, userDto, {new: true}).exec();
    }

    async remove(id: string): Promise<User> {
        return this.userModel.findByIdAndRemove(id).exec();
    }

    async publicUser(email: string): Promise<User> {
        return this.userModel.findOne({email}).select('-password').exec();
    }

}