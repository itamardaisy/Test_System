import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { GetQuestionsService } from 'src/app/Services/Test/get-questions.service';
import Question from 'src/app/Models/Question';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

// export interface PeriodicElement2 {
//   Content: string;
//   Id: string;


// }


@Component({
  selector: 'table-sorting-example',
  styleUrls: ['./testfilter.component.css'],
  templateUrl: './testfilter.component.html',
})
export class TableSortingExample implements OnInit {

  // qList: PeriodicElement2[] = [{ Content: 's???', Id: 'dfd' },{ Content: 'aaa??', Id: 'dfdes' }];

  displayedColumns: string[] = ['Content', 'Id'];

  // questionsList = new MatTableDataSource(this.qList);
  questionsListShow: string [] = [];

  a;
  constructor(private qService: GetQuestionsService) { }

  ngOnInit(): void {
    this.qService.get()
      .subscribe(data => {
        this.questionsListShow = data.data[0];
        this.a = new MatTableDataSource(data.data[0]);
      });
  }

  applyFilter2(filterValue: string) {
   this.a.filter = filterValue.trim().toLowerCase();
  }

  test(event){
    console.log(event);
    alert('lll')
  }
}

