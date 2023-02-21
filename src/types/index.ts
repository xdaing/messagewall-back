import { IsString, IsNotEmpty, MaxLength } from 'class-validator'

export class Like {

    @IsString()
    @IsNotEmpty()
    _id: string

    @IsString()
    @IsNotEmpty()
    visitorId: string
}

export interface CardQuery {
    limit: number
    label: number
    currentPage: number
}

export interface CommentQuery {
    limit: number
    currentPage: number
    card: string
}

export class CreateComment {

    @IsString()
    @IsNotEmpty()
    @MaxLength(6)
    name: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    content: string

    @IsString()
    @IsNotEmpty()
    card: string
}