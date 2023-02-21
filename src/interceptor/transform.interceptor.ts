
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common'
import { map } from 'rxjs/operators'

@Injectable()
export class TransformInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler) {
        return next.handle().pipe(map(data => ({ statusCode: 200, data })))
    }
}