import { Component, OnInit } from '@angular/core';
import {Problem} from '../../model/problem.model';
import {DataService } from '../../service/data.services';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
  problems:  Problem[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getProblems();

  }
  getProblems(): void {
    this.problems = this.dataService.getProblems();
  }

}
