export default interface Question {
    id: number,
    isMultiple: boolean,
    content: string,
    textBelow: string,
    isHorizontal: boolean,
    tags: string,
    isActive: boolean
}