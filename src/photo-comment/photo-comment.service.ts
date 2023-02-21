import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { PhotoComment, PhotoCommentDocument } from '@/db/schemas/photo-comment.schema'
import { queryComments } from '@/utils'
import { CreateComment, CommentQuery } from '@/types'

@Injectable()
export class PhotoCommentService {

    constructor(@InjectModel(PhotoComment.name) private readonly photoCommentModel: Model<PhotoCommentDocument>) { }

    async query(commentQuery: CommentQuery) {
        return queryComments<PhotoComment, Model<PhotoCommentDocument>>(this.photoCommentModel, commentQuery)
    }

    create(createComment: CreateComment) {
        return this.photoCommentModel.create(createComment)
    }
}

