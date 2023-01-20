import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { MessageComment, MessageCommentDocument } from '@/db/schemas/message-comment.schema'
import { CommentQueryInfo, CreateCommentDto } from '@/types'
import { queryComments } from '@/utils'

@Injectable()
export class MessageCommentService {
    constructor(@InjectModel(MessageComment.name) private readonly messageCommentModel: Model<MessageCommentDocument>) { }
    async getMessageComment(commentQueryInfo: CommentQueryInfo): Promise<Array<MessageComment>> {
        const data: Array<MessageComment> = await queryComments<MessageComment, Model<MessageCommentDocument>>(this.messageCommentModel, commentQueryInfo)
        return data
    }
    async createMessageComment(comment: CreateCommentDto): Promise<MessageComment> {
        const data: MessageComment = await this.messageCommentModel.create(comment)
        return data
    }
}
