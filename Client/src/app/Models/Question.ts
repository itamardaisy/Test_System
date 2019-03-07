import { Answer } from './Answer';

export class Question {
    Id: number;
    IsMultiple: boolean;
    Content: string;
    TextBelow: string;
    IsHorizontal: boolean;
    Tags: string;
    IsActive: boolean;
    IsSelected: boolean;
    Answers: Answer[] = [];
}
