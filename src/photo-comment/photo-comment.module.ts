import { Module } from '@nestjs/common'
import { PhotoCommentController } from './photo-comment.controller'
import { PhotoCommentService } from './photo-comment.service'

@Module({
  controllers: [PhotoCommentController],
  providers: [PhotoCommentService]
})

export class PhotoCommentModule { }
