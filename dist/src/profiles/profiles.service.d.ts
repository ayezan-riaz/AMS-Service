/// <reference types="multer" />
import { User } from 'src/users/entities/users.entity';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';
export declare class ProfilesService {
    private userRepository;
    private profileRepository;
    constructor(userRepository: Repository<User>, profileRepository: Repository<Profile>);
    create(userId: number, createProfileDto: CreateProfileDto): Promise<Profile>;
    findAll(): Promise<Profile[]>;
    findAllforUser(id: number): Promise<Profile>;
    findOne(id: number): Promise<Profile>;
    update(id: number, updateProfileDto: UpdateProfileDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    updateResume(id: number, file: Express.Multer.File): Promise<import("typeorm").UpdateResult>;
}
