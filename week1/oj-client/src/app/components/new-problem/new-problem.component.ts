import { Component, OnInit } from '@angular/core';
import { Problem} from '../../model/problem.model';
import {DataService} from '../../services/data.service'
const DEFAULT_P: Problem = Object.freeze({
  id: 0,
  name: '',
  dscp:'',
  dif:'superhard'
});
@Component({
  selector: 'app-new-problem',
  templateUrl: './new-problem.component.html',
  styleUrls: ['./new-problem.component.css']
})
export class NewProblemComponent implements OnInit {
  newProblem: Problem = Object.assign({},DEFAULT_P);
  difficulties: string[] =['easy','medium','hard','superhard' ];
  constructor(private dataServices: DataService) { }

  ngOnInit() {
  }
  addProblem(){
  this.dataServices.addProblem(this.newProblem);
  this.newProblem = Object.assign({},DEFAULT_P);
}
}
