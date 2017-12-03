import {Routes, RouterModule} from '@angular/router';
import {ProblemListComponent} from './components/problem-list/problem-list.component';
import {ProblemDetailComponent} from './components/problem-detail/problem-detail.component';
import { NotFComponent } from './components/not-f/not-f.component';


const routes: Routes = [
    {
        path: '',
        redirectTo:'problems',
        pathMatch:'full'
    },
    {
        path: 'problems',
        component: ProblemListComponent
    },
    {
        path: 'problems/:id',
        component: ProblemDetailComponent
    },
    {
        path:'**',
        component: NotFComponent
        
    }
];

export const routing = RouterModule.forRoot(routes);