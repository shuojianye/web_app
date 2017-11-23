import { Injectable } from '@angular/core';
import{ Problem} from '../model/problem.model';
import{PROB} from '../model/mock_p';
@Injectable()
export class DataService {
  problems: Problem[] = PROB;
  constructor() { }

  getProblems(): Problem[]{
    return PROB;
  }

  getProblem(id: number): Problem{
    return this.problems.find((problem)=>problem.id ===id);
  }
  addProblem(problem: Problem){
    problem.id = this.problems.length+1;
    this.problems.push(problem);
  }
}
