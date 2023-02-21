import { Model, HydratedDocument } from 'mongoose'
import { CardQuery, CommentQuery, Like } from '@/types'

export const queryCards = <K, T extends Model<HydratedDocument<K>>>
    (model: T, cardQuery: CardQuery, select: string) => {
    const { currentPage, label, limit } = cardQuery
    const query = label === -1 ? {} : { label }
    return model.find(query).select(select).
        sort('-time').skip(currentPage * limit).
        limit(limit).populate('commentNumber')
}

export const likeCard = async<K extends { liked: Array<string> }, T extends Model<HydratedDocument<K>>>
    (model: T, like: Like) => {
    const { _id, visitorId } = like
    const document: HydratedDocument<K> = await model.findById(_id)
    const index = document.liked.indexOf(visitorId)
    if (index === -1) {
        document.liked.push(visitorId)
        await document.save()
        return '点赞成功'
    } else {
        document.liked.splice(index, 1)
        await document.save()
        return '已取消赞'
    }
}

export const queryComments = <K, T extends Model<HydratedDocument<K>>>(model: T, commentQuery: CommentQuery) => {
    const { card, currentPage, limit } = commentQuery
    const select: string = 'avatar name content time'
    return model.find({ card }).
        select(select).sort('-time').skip(currentPage * limit).limit(limit)
}




