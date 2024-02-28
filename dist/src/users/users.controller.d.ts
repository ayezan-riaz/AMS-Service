/// <reference types="multer" />
import { DeleteResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserProfileDto } from './dto/update-user-profile.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/users.entity';
import { UserService } from './users.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    findOneS(id: string): Promise<User>;
    findOneA(id: string): Promise<User>;
    findOneE(id: string): Promise<User>;
    findOneSur(id: string): Promise<User>;
    findOneP(id: string): Promise<User>;
    findByEmail(email: string): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    updateWithProfile(id: string, updateUserProfileDto: UpdateUserProfileDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<DeleteResult>;
    uploadFile(id: string, req: any, file: Express.Multer.File): Promise<import("typeorm").UpdateResult>;
}
