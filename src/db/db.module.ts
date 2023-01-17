import { Module, Global } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { Message, MessageSchema } from './schemas/message.schema'
import { Photo, PhotoSchema } from './schemas/photo.schema'
import { MessageComment, MessageCommentSchema } from './schemas/message-comment.schema'
import { PhotoComment, PhotoCommentSchema } from './schemas/photo-comment.schema'

const Connection = MongooseModule.forRoot('mongodb://localhost/nestWall')
const Models = MongooseModule.forFeature([
    { name: Message.name, schema: MessageSchema },
    { name: Photo.name, schema: PhotoSchema },
    { name: MessageComment.name, schema: MessageCommentSchema },
    { name: PhotoComment.name, schema: PhotoCommentSchema }
])

@Global()
@Module({
    imports: [Connection, Models],
    exports: [Models]
})
export class DbModule { }
