import { Answer } from './Answer';

export class Question {
    Id: number;
    IsMultiple = false;
    Content = '';
    TextBelow = '';
    IsHorizontal = false;
    Tags = '';
    IsActive = false;
    Answers: Answer[] = [];
}
