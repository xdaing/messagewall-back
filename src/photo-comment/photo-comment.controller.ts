import { Controller, Get, Post, Query, Body } from '@nestjs/common'
import { CommentQueryInfo, CreateCommentDto } from '@/types'
import { PhotoCommentService } from './photo-comment.service'


@Controller('photoComment')
export class PhotoCommentController {
    constructor(private readonly photoCommentService: PhotoCommentService) { }
    @Get()
    getMessageComment(@Query() commentQueryInfo: CommentQueryInfo) {
        return this.photoCommentService.getPhotoComment(commentQueryInfo)
    }
    @Post()
    createMessageComment(@Body() comment: CreateCommentDto) {
        return this.photoCommentService.createPhotoComment(comment)
    }
}
