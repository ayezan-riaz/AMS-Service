/// <reference types="multer" />
import { User } from 'src/users/entities/users.entity';
import { Repository } from 'typeorm';
import { CreateAcademicDto } from './dto/create-academic.dto';
import { UpdateAcademicDto } from './dto/update-academic.dto';
import { Academic } from './entities/academic.entity';
export declare class AcademicsService {
    private userRepository;
    private academicsRepository;
    constructor(userRepository: Repository<User>, academicsRepository: Repository<Academic>);
    create(id: number, createAcademicDto: CreateAcademicDto): Promise<Academic>;
    findAll(): Promise<Academic[]>;
    findAllforUser(id: number): Promise<Academic[]>;
    findOne(id: number): Promise<Academic>;
    update(id: number, updateAcademicDto: UpdateAcademicDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    updateCertificate(id: number, file: Express.Multer.File): Promise<import("typeorm").UpdateResult>;
    findAcademicsWithUser(id: number): Promise<Academic>;
}
