import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { MessageComment, MessageCommentDocument } from '@/db/schemas/message-comment.schema'
import { CommentQuery, CreateComment } from '@/types'
import { queryComments } from '@/utils'

@Injectable()
export class MessageCommentService {

    constructor(@InjectModel(MessageComment.name) private readonly messageCommentModel: Model<MessageCommentDocument>) { }

    query(commentQuery: CommentQuery) {
        return queryComments<MessageComment, Model<MessageCommentDocument>>(this.messageCommentModel, commentQuery)
    }

    create(createComment: CreateComment) {
        return this.messageCommentModel.create(createComment)
    }
}
