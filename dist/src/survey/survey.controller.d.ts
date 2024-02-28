import { SurveyService } from './survey.service';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { Survey } from './entities/survey.entity';
export declare class SurveyController {
    private readonly surveyService;
    constructor(surveyService: SurveyService);
    create(userId: string, createSurveyDto: CreateSurveyDto): Promise<Survey>;
    findAll(): Promise<Survey[]>;
    findAllforUser(id: string): Promise<Survey>;
    findOne(id: string): Promise<Survey>;
    update(id: string, updateSurveyDto: UpdateSurveyDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
