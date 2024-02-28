import { User } from 'src/users/entities/users.entity';
import { Repository } from 'typeorm';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { Experience } from './entities/experience.entity';
export declare class ExperiencesService {
    private userRepository;
    private experienceRepository;
    constructor(userRepository: Repository<User>, experienceRepository: Repository<Experience>);
    create(userId: number, createExperienceDto: CreateExperienceDto): Promise<Experience>;
    findAll(): Promise<Experience[]>;
    findAllforUser(id: number): Promise<Experience[]>;
    findOne(id: number): Promise<Experience>;
    update(id: number, updateExperienceDto: UpdateExperienceDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
