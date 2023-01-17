import { Controller, Get, Post, Body, Query } from '@nestjs/common'
import { MessageCommentService } from './message-comment.service'
import { CommentQueryInfo, CreateCommentDto } from '@/types'

@Controller('messageComment')
export class MessageCommentController {
    constructor(private readonly messageCommentService: MessageCommentService) { }
    @Get()
    getMessageComment(@Query() commentQueryInfo: CommentQueryInfo) {
        return this.messageCommentService.getMessageComment(commentQueryInfo)
    }
    @Post()
    createMessageComment(@Body() comment: CreateCommentDto) {
        return this.messageCommentService.createMessageComment(comment)
    }
}
