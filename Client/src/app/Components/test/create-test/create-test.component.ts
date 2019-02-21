import { Component, OnInit, ViewChild } from '@angular/core';
import { TestModel } from '../../../Models/TestModel';
import { GetTemplatesService } from 'src/app/Services/Test/get-templates.service';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {

  @ViewChild('test') test: any;

  languages = ['engliah', 'hebrew'];
  templates: string [] = [];
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

  copy(event) {
    event.nativeElement.select();
    document.execCommand('copy');
  }
  // copy(event) {
  //   this.test.nativeElement.select();
  //   document.execCommand('copy');
  // }

}
