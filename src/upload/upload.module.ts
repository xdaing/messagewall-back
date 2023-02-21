import { Module } from '@nestjs/common'
import { MulterModule } from '@nestjs/platform-express'
import { MulterConfig } from './multer-config'
import { UploadController } from './upload.controller'
import { UploadService } from './upload.service'

const uploadImageModule = MulterModule.registerAsync({
    useClass: MulterConfig
})

@Module({
    imports: [uploadImageModule],
    controllers: [UploadController],
    providers: [UploadService],
})

export class UploadModule { }
