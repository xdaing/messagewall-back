import { Controller, Get, Post, Query, Body, ValidationPipe, UsePipes } from '@nestjs/common'
import { PhotoCommentService } from './photo-comment.service'
import { CreateComment } from '@/types'


@Controller('photoComment')
export class PhotoCommentController {

    constructor(private readonly photoCommentService: PhotoCommentService) { }

    @Get()
    @UsePipes(ValidationPipe)
    query(@Query('limit') limit: number, @Query('currentPage') currentPage: number, @Query('card') card: string) {
        return this.photoCommentService.query({ currentPage, limit, card })
    }

    @Post()
    create(@Body(ValidationPipe) createComment: CreateComment) {
        return this.photoCommentService.create(createComment)
    }
}
