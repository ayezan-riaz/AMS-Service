import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AcademicsService } from 'src/academics/academics.service';
export declare class AcademicsUserInterceptor implements NestInterceptor {
    private readonly academicsService;
    constructor(academicsService: AcademicsService);
    intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>>;
}
