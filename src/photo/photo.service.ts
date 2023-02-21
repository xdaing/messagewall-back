import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Photo, PhotoDocument } from '@/db/schemas/photo.schema'
import { CardQuery, Like } from '@/types'
import { likeCard, queryCards } from '@/utils'

@Injectable()
export class PhotoService {
    constructor(@InjectModel(Photo.name) private readonly photoModel: Model<PhotoDocument>) { }

    async query(cardQuery: CardQuery) {
        const select: string = 'label name content liked time image'
        return queryCards<Photo, Model<PhotoDocument>>(this.photoModel, cardQuery, select)
    }

    async like(like: Like) {
        return likeCard<Photo, Model<PhotoDocument>>(this.photoModel, like)
    }
}
