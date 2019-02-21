import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TestModel } from '../../../Models/TestModel';
import { GetTemplatesService } from 'src/app/Services/Test/get-templates.service';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {

  //@ViewChild('test') test: any;
  @ViewChild('successTextArea') successText: ElementRef;
  @ViewChild('failureTextArea') failureText: ElementRef;

  languages = ['engliah', 'hebrew'];
  templates: string[] = [];
  certificates: any = ['gold', 'silver', 'copper'];


  testModel = new TestModel('456', 'en', 'lol', 'fsd', 'q2@d.d', 45, true, 'df', 'fd', 'fd', 'fd'
    , 'fd', 'fd', 'fd', 456, false);

  constructor(private templateService: GetTemplatesService) { }

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

  Submit(event) {
    console.log(event);
  }


}


   // event.currentTarget.select();
    // document.execCommand('copy');
    // if(isSuccess){
    // this.successText.nativeElement.focus();
    // document.execCommand('paste');


