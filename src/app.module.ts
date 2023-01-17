import { Module } from '@nestjs/common'
import { DbModule } from '@/db/db.module'
import { MessageModule } from '@/message/message.module'
import { MessageCommentModule } from '@/message-comment/message-comment.module'
import { UploadModule } from '@/upload/upload.module'
import { PhotoModule } from '@/photo/photo.module'
import { PhotoCommentModule } from '@/photo-comment/photo-comment.module'

@Module({
  imports: [DbModule, MessageModule, MessageCommentModule, UploadModule, PhotoModule, PhotoCommentModule],
})
export class AppModule { }
