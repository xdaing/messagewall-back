import { Controller, Get, Put, Body, Query, ValidationPipe, ParseIntPipe, UsePipes } from '@nestjs/common'
import { PhotoService } from './photo.service'
import { Like } from '@/types'

@Controller('photos')
export class PhotoController {

    constructor(private readonly photoService: PhotoService) { }

    @Get()
    @UsePipes(ParseIntPipe)
    query(@Query('currentPage') currentPage: number, @Query('limit') limit: number, @Query('label') label: number) {
        return this.photoService.query({ currentPage, limit, label })
    }

    @Put('like')
    like(@Body(ValidationPipe) like: Like) {
        return this.photoService.like(like)
    }

}
