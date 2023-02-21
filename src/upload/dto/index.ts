import { IsString, IsNotEmpty, MaxLength, IsNumberString } from 'class-validator'

export class CreatePhoto {

    @IsString()
    @IsNotEmpty()
    visitorId: string

    @IsNotEmpty()
    @IsNumberString()
    label: string

    @IsNotEmpty()
    @IsString()
    avatar: string

    @IsNotEmpty()
    @IsString()
    @MaxLength(6)
    name: string

    @IsNotEmpty()
    @IsString()
    @MaxLength(96)
    content: string
}