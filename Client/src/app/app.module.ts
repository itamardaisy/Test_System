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
import { MatTableModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';

const appRoutes: Routes = [
    { path: 'Register', component: RegisterComponent },
    { path: 'QuestionManager', component: QuestionManagerComponent },
    { path: 'Login', component: LoginComponent },
    { path: 'SelectQuestions', component: QuestionsSelectComponent },
    { path: 'QuestionManager', component: QuestionManagerComponent },
    { path: 'EditQuestion', component: EditQuestionComponent }
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
        EditQuestionComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        MatTableModule,
        BrowserAnimationsModule,
        MatListModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true }
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
