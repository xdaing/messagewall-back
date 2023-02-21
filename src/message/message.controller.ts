import { Controller, Get, Post, Put, Query, Body, UsePipes, ParseIntPipe, ValidationPipe } from '@nestjs/common'
import { MessageService } from './message.service'
import { CreateMessage } from './dto'
import { Like } from '@/types'

@Controller('messages')
export class MessageController {

    constructor(private readonly messageService: MessageService) { }

    @Get()
    @UsePipes(ParseIntPipe)
    query(@Query('limit') limit: number, @Query('currentPage') currentPage: number, @Query('label') label: number) {
        return this.messageService.query({ currentPage, label, limit })
    }

    @Post()
    create(@Body(ValidationPipe) createMessage: CreateMessage) {
        return this.messageService.create(createMessage)
    }

    @Put('like')
    like(@Body(ValidationPipe) like: Like) {
        return this.messageService.like(like)
    }
}
