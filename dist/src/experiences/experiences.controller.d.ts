import { ExperiencesService } from './experiences.service';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { Experience } from './entities/experience.entity';
export declare class ExperiencesController {
    private readonly experiencesService;
    constructor(experiencesService: ExperiencesService);
    create(userId: string, createExperienceDto: CreateExperienceDto): Promise<Experience>;
    findAll(): Promise<Experience[]>;
    findAllforUser(id: string): Promise<Experience[]>;
    findOne(id: string): Promise<Experience>;
    update(id: string, updateExperienceDto: UpdateExperienceDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
