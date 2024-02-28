/// <reference types="multer" />
import { SkillsService } from './skills.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill } from './entities/skill.entity';
export declare class SkillsController {
    private readonly skillsService;
    constructor(skillsService: SkillsService);
    create(id: string, createSkillDto: CreateSkillDto): Promise<Skill>;
    findAll(): Promise<Skill[]>;
    findAllforUser(id: string): Promise<Skill[]>;
    findOne(id: string): Promise<Skill>;
    update(id: string, updateSkillDto: UpdateSkillDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    uploadFile(id: string, req: any, file: Express.Multer.File): Promise<import("typeorm").UpdateResult>;
}
