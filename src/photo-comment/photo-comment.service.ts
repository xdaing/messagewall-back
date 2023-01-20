import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { PhotoComment, PhotoCommentDocument } from '@/db/schemas/photo-comment.schema'
import { CommentQueryInfo, CreateCommentDto } from '@/types'
import { queryComments } from '@/utils'

@Injectable()
export class PhotoCommentService {
    constructor(@InjectModel(PhotoComment.name) private readonly photoCommentModel: Model<PhotoCommentDocument>) { }
    async getPhotoComment(commentQueryInfo: CommentQueryInfo): Promise<Array<PhotoComment>> {
        const data: Array<PhotoComment> = await queryComments(this.photoCommentModel, commentQueryInfo)
        return data
    }
    async createPhotoComment(comment: CreateCommentDto): Promise<PhotoComment> {
        const data: PhotoComment = await this.photoCommentModel.create(comment)
        return data
    }
}

