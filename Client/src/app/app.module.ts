import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { QuestionManagerComponent } from './Components/question-manager/question-manager.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { QuestionsSelectComponent } from './Components/test/questions-select/questions-select.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { EditQuestionComponent } from './Components/edit-question/edit-question.component';

import { HttpClientModule } from '@angular/common/http';
import { MatTableModule, MatInputModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { CreateTestComponent } from './Components/test/create-test/create-test.component';
import { TableSortingExample } from './Components/test/testfilter/testfilter.component';
import { MatButtonModule } from '@angular/material/button';
import { UserTestComponent } from './Components/user-test/user-test.component';
import { UserTestQuestionComponent } from './Components/user-test-question/user-test-question.component';
import { AnswerComponent } from './Components/edit-question/answer/answer.component';
import { ShowUserTestComponent } from './Components/show-user-test/show-user-test.component';
import { ShowUserTestQuestionComponent } from './Components/show-user-test-question/show-user-test-question.component';
import { ShowQuestionDetailsComponent } from './Components/show-question-details/show-question-details.component';
import { ShowQuestionButtonComponent } from './Components/show-question-details/show-question-details.component';

const appRoutes: Routes = [
    { path: 'Register', component: RegisterComponent },
    { path: 'Home', component: HomeComponent},
    { path: 'QuestionManager', component: QuestionManagerComponent },
    { path: 'Login', component: LoginComponent },
    { path: 'SelectQuestions', component: QuestionsSelectComponent },
    { path: 'EditQuestion', component: EditQuestionComponent },
    { path: 'CreateTest', component: CreateTestComponent},
    { path: 'UserTest', component: UserTestComponent },
    { path: 'TestCreate', component: CreateTestComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        QuestionManagerComponent,
        NavbarComponent,
        QuestionsSelectComponent,
        ResetPasswordComponent,
        EditQuestionComponent,
        CreateTestComponent,
        TableSortingExample,
        UserTestComponent,
        UserTestQuestionComponent,
        AnswerComponent,
        ShowUserTestComponent,
        ShowUserTestQuestionComponent,
        ShowQuestionDetailsComponent,
        ShowQuestionButtonComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        MatTableModule,
        BrowserAnimationsModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,
        MatDialogModule,
        MatButtonModule,
        MatRadioModule,
        MatDialogModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true }
        )
    ],
    providers: [],
    entryComponents: [
        ShowQuestionDetailsComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
