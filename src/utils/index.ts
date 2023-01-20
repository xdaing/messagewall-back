import { Model, HydratedDocument } from 'mongoose'
import { CommentQueryInfo, CardQueryInfo } from '@/types'

export const queryComments = async <K, T extends Model<HydratedDocument<K>>>(model: T, commentQueryInfo: CommentQueryInfo): Promise<Array<K>> => {
    const limit: number = parseInt(commentQueryInfo.limit)
    const currentPage: number = parseInt(commentQueryInfo.currentPage)
    const card: string = commentQueryInfo.card
    const select: string = 'avatar name content time'
    const result: Array<K> = await model.find({ card }).
        select(select).sort('-time').skip(currentPage * limit).limit(limit)
    return result
}
export const queryCards = async <K, T extends Model<HydratedDocument<K>>>(model: T, cardQueryInfo: CardQueryInfo, select: string): Promise<Array<K>> => {
    const limit: number = parseInt(cardQueryInfo.limit)
    const currentPage: number = parseInt(cardQueryInfo.currentPage)
    const label: number = parseInt(cardQueryInfo.label)
    const query: { label?: number } = label === -1 ? {} : { label }
    const result: Array<K> = await model.find(query).
        select(select).sort('-time').skip(currentPage * limit).limit(limit).
        populate('commentNumber')
    return result
}
export const likeCard = async<K extends { liked: Array<string> }, T extends Model<HydratedDocument<K>>>(_id: string, visitorId: string, model: T) => {
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