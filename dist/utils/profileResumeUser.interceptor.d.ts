import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ProfilesService } from 'src/profiles/profiles.service';
export declare class ProfileResumeUserInterceptor implements NestInterceptor {
    private readonly profilesService;
    constructor(profilesService: ProfilesService);
    intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>>;
}
