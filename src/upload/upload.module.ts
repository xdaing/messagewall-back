import { Module } from '@nestjs/common'
import { MulterModule } from '@nestjs/platform-express'
import { MulterConfigService } from './MulterConfigService.service'
import { UploadController } from './upload.controller'

const uploadImageModule = MulterModule.registerAsync({
    useClass: MulterConfigService
})
@Module({
    imports: [uploadImageModule],
    controllers: [UploadController],
})
export class UploadModule { }
