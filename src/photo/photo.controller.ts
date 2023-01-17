import { Controller, Get, Post, Body, Query } from '@nestjs/common'
import { CardQueryInfo } from '@/types'
import { PhotoService } from './photo.service'

@Controller('photos')
export class PhotoController {
    constructor(private readonly photoService: PhotoService) { }

    @Get()
    getPhoto(@Query() cardQueryInfo: CardQueryInfo) {
        return this.photoService.getPhoto(cardQueryInfo)
    }
    @Post('like')
    like(@Body('_id') _id: string, @Body('visitorId') visitorId: string) {
        return this.photoService.likePhoto(_id, visitorId)
    }
}
