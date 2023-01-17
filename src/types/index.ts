export interface QueryInfo {
    readonly limit: string
    readonly currentPage: string
}
export interface CardQueryInfo extends QueryInfo {
    readonly label: string
}
export interface CommentQueryInfo extends QueryInfo {
    readonly card: string
}
export interface CreateCommentDto {
    readonly name: string
    readonly content: string
    readonly card: string
}
export interface MyResponse<T> {
    state: 200
    data: T
}