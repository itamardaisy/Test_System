import { Component, OnInit } from '@angular/core';
import { TestModel } from '../../../Models/TestModel';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {

  testModel = new TestModel('456', 'en', 'lol', 'fsd', 'q2@d.d', 45, true, 'df', 'fd', 'fd', 'fd'
    , 'fd', 'fd', 'fd', 456, false);

  constructor() { }

  ngOnInit() {

  }

}
