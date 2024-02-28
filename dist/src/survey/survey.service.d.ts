import { User } from 'src/users/entities/users.entity';
import { Repository } from 'typeorm';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { Survey } from './entities/survey.entity';
export declare class SurveyService {
    private userRepository;
    private surveyRepository;
    constructor(userRepository: Repository<User>, surveyRepository: Repository<Survey>);
    create(userId: number, createSurveyDto: CreateSurveyDto): Promise<Survey>;
    findAll(): Promise<Survey[]>;
    findAllforUser(id: number): Promise<Survey>;
    findOne(id: number): Promise<Survey>;
    update(id: number, updateSurveyDto: UpdateSurveyDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
