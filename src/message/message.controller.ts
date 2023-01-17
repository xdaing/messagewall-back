import { Controller, Get, Post, Query, Body } from '@nestjs/common'
import { CardQueryInfo } from '@/types'
import { MessageService } from './message.service'
import { CreateMessageDto } from './dto'

@Controller('messages')
export class MessageController {
    constructor(private readonly messageService: MessageService) { }
    @Get()
    getMessage(@Query() cardQueryInfo: CardQueryInfo) {
        return this.messageService.getMessage(cardQueryInfo)
    }
    @Post()
    createMessage(@Body() createMessageDto: CreateMessageDto) {
        return this.messageService.createMessage(createMessageDto)
    }
    @Post('like')
    likeMessage(@Body('_id') _id: string, @Body('visitorId') visitorId: string) {
        return this.messageService.likeMessage(_id, visitorId)
    }
}
