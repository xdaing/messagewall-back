
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common'
import { MyResponse } from '@/types'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, MyResponse<T>>{
    intercept(context: ExecutionContext, next: CallHandler<T>): Observable<MyResponse<T>> | Promise<Observable<MyResponse<T>>> {
        return next.handle().pipe(map(data => ({ state: 200, data })))
    }
}