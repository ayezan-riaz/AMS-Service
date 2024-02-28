/// <reference types="multer" />
import FilesHelper from 'files/FilesHelper';
import { Profile } from 'src/profiles/entities/profile.entity';
import { Repository } from 'typeorm';
import { UpdateUserParams } from 'utils/types';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserProfileDto } from './dto/update-user-profile.dto';
import { User } from './entities/users.entity';
export declare class UserService {
    private profileRepository;
    private userRepository;
    private fileHelper;
    constructor(profileRepository: Repository<Profile>, userRepository: Repository<User>, fileHelper: FilesHelper);
    create(userDetails: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    findOneWithSkills(id: number): Promise<User>;
    findOneWithAcademics(id: number): Promise<User>;
    findOneWithExperiences(id: number): Promise<User>;
    findOneWithSurvey(id: number): Promise<User>;
    findOneWithProfile(id: number): Promise<User>;
    findByEmail(email: string): Promise<User>;
    findByToken(token: string): Promise<User>;
    findByUniEmail(uni_email: string): Promise<User>;
    update(id: number, userDetails: UpdateUserParams): Promise<import("typeorm").UpdateResult>;
    updateWithProfile(id: number, userProfileDetails: UpdateUserProfileDto): Promise<import("typeorm").UpdateResult>;
    updatePassword(id: number, password: string): Promise<import("typeorm").UpdateResult>;
    updatePasswordToken(id: number, password_reset_token: string): Promise<import("typeorm").UpdateResult>;
    updateAvatar(id: number, file: Express.Multer.File): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
