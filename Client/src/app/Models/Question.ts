export default interface Question {
    Id: number,
    IsMultiple: boolean,
    Content: string,
    TextBelow: string,
    IsHorizontal: boolean,
    Tags: string,
    IsActive: boolean
}