export interface CreateMessageDto {
    readonly visitorId: string
    readonly label: number
    readonly avatar: number,
    readonly name: string
    readonly content: string
    readonly color: number
}