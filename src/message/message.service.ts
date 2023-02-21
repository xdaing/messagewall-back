import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Message, MessageDocument } from '@/db/schemas/message.schema'
import { CardQuery, Like } from '@/types'
import { likeCard, queryCards } from '@/utils'
import { CreateMessage } from './dto'

@Injectable()
export class MessageService {

    constructor(@InjectModel(Message.name) private readonly messageModel: Model<MessageDocument>) { }

    query(cardQuery: CardQuery) {
        const select: string = 'label color name content liked time'
        return queryCards<Message, Model<MessageDocument>>(this.messageModel, cardQuery, select)
    }

    create(createMessage: CreateMessage) {
        return this.messageModel.create(createMessage)
    }

    like(like: Like) {
        return likeCard<Message, Model<MessageDocument>>(this.messageModel, like)
    }
}
