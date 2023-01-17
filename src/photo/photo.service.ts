import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Photo, PhotoDocument } from '@/db/schemas/photo.schema'
import { CardQueryInfo, MyResponse } from '@/types'
import { likeCard, queryCards } from '@/utils'

@Injectable()
export class PhotoService {
    constructor(@InjectModel(Photo.name) private readonly photoModel: Model<PhotoDocument>) { }

    async getPhoto(cardQueryInfo: CardQueryInfo): Promise<MyResponse<Array<Photo>>> {
        const select: string = 'label name content liked time image'
        const data: Array<Photo> = await queryCards(this.photoModel, cardQueryInfo, select)
        return { state: 200, data }
    }
    async likePhoto(_id: string, visitorId: string): Promise<MyResponse<string>> {
        return likeCard(_id, visitorId, this.photoModel)
    }
}