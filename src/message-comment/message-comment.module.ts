import { Module } from '@nestjs/common'
import { MessageCommentController } from './message-comment.controller'
import { MessageCommentService } from './message-comment.service'

@Module({
  controllers: [MessageCommentController],
  providers: [MessageCommentService]
})

export class MessageCommentModule { }
