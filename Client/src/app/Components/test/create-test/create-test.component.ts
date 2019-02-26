import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TestModel } from '../../../Models/TestModel';
import { GetTemplatesService } from 'src/app/Services/Test/get-templates.service';
import { AddTestService } from 'src/app/Services/Test/add-test.service';
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {
  @ViewChild('successTextArea') successText: ElementRef;
  @ViewChild('failureTextArea') failureText: ElementRef;

  languages = ['engliah', 'hebrew'];
  templates: string[] = [];
  certificates: any = ['gold', 'silver', 'copper'];
  testModel = new TestModel(undefined, null, null, null,null, null, false, null, null, null, null
    , null ,null, null, null, false);

  constructor(private templateService: GetTemplatesService, private testService: AddTestService) { }

  ngOnInit() {
    this.templateService.get()
      .subscribe(data => {
        this.templates = data;
      }, err => alert(err));
  }

  Copy(event, isSuccess) {
    const val = event.currentTarget.value;

    if (isSuccess) {
      this.successText.nativeElement.value += ` ${val}`;
    } else {
      this.failureText.nativeElement.value += ` ${val}`;
    }
  }

  Submit(test) {
    console.log(test);
    this.testService.post(test)
      .subscribe(data => console.log(data)
      , err => console.log(err));
  }
}


   // event.currentTarget.select();
    // document.execCommand('copy');
    // if(isSuccess){
    // this.successText.nativeElement.focus();
    // document.execCommand('paste');


