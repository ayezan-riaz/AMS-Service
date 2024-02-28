/// <reference types="multer" />
import FilesHelper from 'files/FilesHelper';
import { User } from 'src/users/entities/users.entity';
import { Repository } from 'typeorm';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill } from './entities/skill.entity';
export declare class SkillsService {
    private userRepository;
    private skillRepository;
    private fileHelper;
    constructor(userRepository: Repository<User>, skillRepository: Repository<Skill>, fileHelper: FilesHelper);
    create(id: number, createSkillDto: CreateSkillDto): Promise<Skill>;
    findAll(): Promise<Skill[]>;
    findAllforUser(id: number): Promise<Skill[]>;
    findOne(id: number): Promise<Skill>;
    update(id: number, updateSkillDto: UpdateSkillDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    updateCertificate(id: number, file: Express.Multer.File): Promise<import("typeorm").UpdateResult>;
    findSkillWithUser(id: number): Promise<Skill>;
}
