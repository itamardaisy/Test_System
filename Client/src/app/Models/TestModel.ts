import Question from './Question';

export class TestModel {
    public Language: string;
    public Name: string;
    public HeaderContent: string;
    public CreatorEmail: string;
    public PassingGrade: number;
    public ShowAnswers: boolean;
    public CertificateURL: string;
    public TextSuccess: string;
    public TextFailure: string;
    public SubjectFailureText: string;
    public SubjectSuccessText: string;
    public SubjectFailureBody: string;
    public SubjectSuccessBody: string;
    public CategoryId: number;
    public IsActive: boolean;
    public Questions: Question[] = [];

}
