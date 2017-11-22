import { Injectable } from '@angular/core';
import{ Problem} from '../model/problem.model';
import{PROB} from '../model/mock_p';
@Injectable()
export class DataService {

  constructor() { }

  getProblems(): Problem[]{
    return PROB;
  }

  getProblem(id: number): Problem{
    return PROB.find((problem)=>problem.id ===id);
  }
}
