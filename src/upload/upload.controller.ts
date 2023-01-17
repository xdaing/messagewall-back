import { Controller, Post, UseInterceptors, UploadedFile, Body } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Photo, PhotoDocument } from '@/db/schemas/photo.schema'
import { MyResponse } from '@/types'
import { CreatePhotoDto } from './dto'

@Controller('upload')
export class UploadController {
    constructor(@InjectModel(Photo.name) private readonly photoModel: Model<PhotoDocument>) { }
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async uploadImage(@UploadedFile() file: any, @Body() createPhotoDto: CreatePhotoDto): Promise<MyResponse<Photo>> {
        const data: Photo = await this.photoModel.create(Object.assign(createPhotoDto, { image: file.filename, label: parseInt(createPhotoDto.label) }))
        return { state: 200, data }
    }
}
