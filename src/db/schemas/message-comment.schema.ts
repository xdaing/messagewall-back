import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { HydratedDocument } from 'mongoose'

export type MessageCommentDocument = HydratedDocument<MessageComment>

@Schema()
export class MessageComment {

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
    card: string

    @Prop({ default: Date.now })
    time: Date

    @Prop({ required: true, trim: true, maxlength: 6 })
    name: string

    @Prop({ required: true, trim: true, maxlength: 30 })
    content: string

    @Prop({ required: true, trim: true })
    avatar: string

    @Prop({ required: true, trim: true })
    visitorId: string

}

export const MessageCommentSchema = SchemaFactory.createForClass(MessageComment)