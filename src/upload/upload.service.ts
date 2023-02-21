import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Photo, PhotoDocument } from '@/db/schemas/photo.schema'
import { Express } from 'express'
import { CreatePhoto } from './dto'

@Injectable()
export class UploadService {
    constructor(@InjectModel(Photo.name) private readonly photoModel: Model<PhotoDocument>) { }

    create(file: Express.Multer.File, createPhoto: CreatePhoto, label: number) {
        return this.photoModel.create(Object.assign(createPhoto, { image: file.filename, label }))
    }
}
