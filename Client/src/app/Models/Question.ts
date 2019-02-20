import { Answer } from './Answer';

export default class Question {
    Id: number;
    IsMultiple: boolean;
    Content: string;
    TextBelow: string;
    IsHorizontal: boolean;
    Tags: string;
    IsActive: boolean;
    Answers: Answer[];
}
