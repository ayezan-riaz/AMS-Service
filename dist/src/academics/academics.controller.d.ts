/// <reference types="multer" />
import { AcademicsService } from './academics.service';
import { CreateAcademicDto } from './dto/create-academic.dto';
import { UpdateAcademicDto } from './dto/update-academic.dto';
import { Academic } from './entities/academic.entity';
export declare class AcademicsController {
    private readonly academicsService;
    constructor(academicsService: AcademicsService);
    create(createAcademicDto: CreateAcademicDto, id: string): Promise<Academic>;
    findAll(): Promise<Academic[]>;
    findAllforUser(id: string): Promise<Academic[]>;
    findOne(id: string): Promise<Academic>;
    update(id: string, updateAcademicDto: UpdateAcademicDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    uploadFile(id: string, req: any, file: Express.Multer.File): Promise<import("typeorm").UpdateResult>;
}
