import { EQuestionType } from '../Enums/EQuestionType';

export class QuestionEdit {
    public constructor(
        Id?: number,
        Tags?: string[],
        LastUpdate?: Date,
        QuestionType?: EQuestionType,
        TestId?: number
        ) {}
}
