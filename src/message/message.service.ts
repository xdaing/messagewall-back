import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Message, MessageDocument } from '@/db/schemas/message.schema'
import { CardQueryInfo } from '@/types'
import { likeCard, queryCards } from '@/utils'
import { CreateMessageDto } from './dto'
@Injectable()
export class MessageService {
    constructor(@InjectModel(Message.name) private readonly messageModel: Model<MessageDocument>) { }

    async getMessage(cardQueryInfo: CardQueryInfo): Promise<Array<Message>> {
        const select: string = 'label color name content liked time'
        const data: Array<Message> = await queryCards(this.messageModel, cardQueryInfo, select)
        return data
    }

    async createMessage(createMessageDto: CreateMessageDto): Promise<Message> {
        const data: Message = await this.messageModel.create(createMessageDto)
        return data
    }
    async likeMessage(_id: string, visitorId: string): Promise<string> {
        return likeCard(_id, visitorId, this.messageModel)
    }
}
