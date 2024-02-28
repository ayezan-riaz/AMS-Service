import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { SkillsService } from 'src/skills/skills.service';
export declare class SkillsUserInterceptor implements NestInterceptor {
    private readonly skillsService;
    constructor(skillsService: SkillsService);
    intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>>;
}
