import { IsString, IsNumber, IsNotEmpty, MaxLength } from 'class-validator'

export class CreateMessage {

    @IsNotEmpty()
    @IsString()
    visitorId: string

    @IsNotEmpty()
    @IsNumber()
    label: number

    @IsNotEmpty()
    @IsString()
    avatar: number

    @IsNotEmpty()
    @IsString()
    @MaxLength(6)
    name: string

    @IsNotEmpty()
    @IsString()
    @MaxLength(96)
    content: string

    @IsNotEmpty()
    @IsString()
    color: string
}