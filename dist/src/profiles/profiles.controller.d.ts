/// <reference types="multer" />
import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';
export declare class ProfilesController {
    private readonly profilesService;
    constructor(profilesService: ProfilesService);
    create(userId: string, createProfileDto: CreateProfileDto): Promise<Profile>;
    findAll(): Promise<Profile[]>;
    findAllforUser(id: string): Promise<Profile>;
    findOne(id: string): Promise<Profile>;
    update(id: string, updateProfileDto: UpdateProfileDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    uploadFile(id: string, req: any, file: Express.Multer.File): Promise<import("typeorm").UpdateResult>;
}
