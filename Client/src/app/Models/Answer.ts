export class Answer {
    public constructor(text, isCorrect) {
        this.Text = text;
        this.IsCorrect = isCorrect;
    }
    public Text: String;
    public IsCorrect: boolean;
}
