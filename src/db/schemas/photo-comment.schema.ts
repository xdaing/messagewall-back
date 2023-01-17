import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { HydratedDocument } from 'mongoose'
import { Photo } from './photo.schema'

export type PhotoCommentDocument = HydratedDocument<PhotoComment>

@Schema()
export class PhotoComment {

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Photo' })
    card: Photo

    @Prop({ default: Date.now })
    time: Date

    @Prop({ required: true, trim: true, maxlength: 6 })
    name: string

    @Prop({ required: true, trim: true, maxlength: 30 })
    content: string

    @Prop({ required: true })
    avatar: string

    @Prop({ required: true })
    visitorId: string

}
export const PhotoCommentSchema = SchemaFactory.createForClass(PhotoComment)