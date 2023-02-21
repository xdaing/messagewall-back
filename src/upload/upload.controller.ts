import { Controller, Post, UseInterceptors, UploadedFile, Body, ParseIntPipe, ValidationPipe } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { CreatePhoto } from './dto'
import { UploadService } from './upload.service'

@Controller('upload')
export class UploadController {

    constructor(private readonly uploadService: UploadService) { }

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async create(@UploadedFile() file: Express.Multer.File, @Body('label', ParseIntPipe) label: number, @Body(ValidationPipe) createPhoto: CreatePhoto) {
        return this.uploadService.create(file, createPhoto, label)
    }
}
