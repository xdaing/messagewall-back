import { Injectable } from '@nestjs/common'
import { MulterOptionsFactory, MulterModuleOptions } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { extname, join } from 'path'
import { nanoid } from 'nanoid'

@Injectable()
export class MulterConfig implements MulterOptionsFactory {
    createMulterOptions(): MulterModuleOptions {
        return {
            storage: diskStorage({
                destination: join(__dirname, '../public/images'),
                filename: (_, file, callback) => {
                    const fileName = `${nanoid() + extname(file.originalname)}`
                    return callback(null, fileName)
                }
            }),
            limits: { fileSize: 2097152 },
            fileFilter(_, file, callback) {
                if (['image/jpeg', 'image/png'].includes(file.mimetype)) callback(null, true)
                else callback(new Error(), false)
            },
        }
    }
}
