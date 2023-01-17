import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { HydratedDocument } from 'mongoose'
import { Message } from './message.schema'

export type MessageCommentDocument = HydratedDocument<MessageComment>

@Schema()
export class MessageComment {
    // message id
    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Message' })
    card: Message

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
export const MessageCommentSchema = SchemaFactory.createForClass(MessageComment)