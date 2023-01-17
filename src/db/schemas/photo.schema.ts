import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type PhotoDocument = HydratedDocument<Photo>

@Schema()
export class Photo {
    // 游客的 id
    @Prop({ required: true, trim: true })
    visitorId: string

    // 分类
    @Prop({ required: true })
    label: number

    //  头像
    @Prop({ required: true })
    avatar: string

    //  名称
    @Prop({ required: true, trim: true, maxlength: 6 })
    name: string

    // 内容
    @Prop({ required: true, trim: true, maxlength: 96 })
    content: string

    // 图片 url
    @Prop({ required: true })
    image: string

    // 时间
    @Prop({ default: Date.now })
    time: Date

    // 点赞的人
    @Prop([String])
    liked: Array<string>

}
const PhotoSchema = SchemaFactory.createForClass(Photo)
PhotoSchema.virtual('commentNumber', {
    ref: 'PhotoComment',
    localField: '_id',
    foreignField: 'card',
    count: true
})
PhotoSchema.set('toObject', { virtuals: true })
PhotoSchema.set('toJSON', { virtuals: true })
export { PhotoSchema }