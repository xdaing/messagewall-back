import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type MessageDocument = HydratedDocument<Message>

@Schema()
export class Message {
    // 游客的 id
    @Prop({ required: true, trim: true })
    visitorId: string

    // 分类
    @Prop({ required: true })
    label: number

    //  头像
    @Prop({ required: true })
    avatar: string

    // 卡片颜色
    @Prop({ required: true })
    color: string

    //  名称
    @Prop({ required: true, trim: true, maxlength: 6 })
    name: string

    // 内容
    @Prop({ required: true, trim: true, maxlength: 96 })
    content: string

    // 时间
    @Prop({ default: Date.now })
    time: Date

    // 点赞的人
    @Prop([String])
    liked: Array<string>

}
const MessageSchema = SchemaFactory.createForClass(Message)
MessageSchema.virtual('commentNumber', {
    ref: 'MessageComment',
    localField: '_id',
    foreignField: 'card',
    count: true
})
MessageSchema.set('toObject', { virtuals: true })
MessageSchema.set('toJSON', { virtuals: true })
export { MessageSchema }