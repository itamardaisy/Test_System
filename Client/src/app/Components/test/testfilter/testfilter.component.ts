import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { GetQuestionsService } from 'src/app/Services/Test/get-questions.service';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

@Component({
    selector: 'app-table-sorting',
    styleUrls: ['./testfilter.component.css'],
    templateUrl: './testfilter.component.html',
})
export class TableSortingComponent implements OnInit {

    displayedColumns: string[] = ['Content', 'Id'];
    questionsListShow: string[] = [];
    dataSource;
    constructor(private questionService: GetQuestionsService) { }

    ngOnInit(): void {
        this.questionService.get()
            .subscribe(data => {
                this.questionsListShow = data.data[0];
                this.dataSource = new MatTableDataSource(data.data[0]);
            });
    }

    applyFilter2(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    test(event) {
        console.log(event);
    }
}

