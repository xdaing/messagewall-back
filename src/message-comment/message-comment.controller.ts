import { Controller, Get, Post, Body, Query, ValidationPipe, UsePipes } from '@nestjs/common'
import { MessageCommentService } from './message-comment.service'
import { CreateComment } from '@/types'

@Controller('messageComment')
export class MessageCommentController {

    constructor(private readonly messageCommentService: MessageCommentService) { }

    @Get()
    @UsePipes(ValidationPipe)
    query(@Query('limit') limit: number, @Query('currentPage') currentPage: number, @Query('card') card: string) {
        return this.messageCommentService.query({ limit, currentPage, card })
    }

    @Post()
    createMessageComment(@Body(ValidationPipe) createComment: CreateComment) {
        return this.messageCommentService.create(createComment)
    }
}
