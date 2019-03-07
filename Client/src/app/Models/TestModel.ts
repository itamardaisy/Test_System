import { Question } from './Question';

export class TestModel {
    public Language: string = null;
    public Name: string = null;
    public HeaderContent: string = null;
    public CreatorEmail: string = null;
    public PassingGrade: number = null;
    public ShowAnswers = false;
    public CertificateURL: string = null;
    public TextSuccess: string = null;
    public TextFailure: string = null;
    public SubjectFailureText: string = null;
    public SubjectSuccessText: string = null;
    public SubjectFailureBody: string = null;
    public SubjectSuccessBody: string = null;
    public CategoryId = -1;
    public IsActive = false;
    public Questions: Question[] = [];

}
