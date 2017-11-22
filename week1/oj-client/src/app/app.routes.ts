import {Routes, RouterModule} from '@angular/router';
import {ProblemListComponent} from './components/problem-list/problem-list.component';
import {ProblemDetailComponent} from './components/problem-detail/problem-detail.component';

const routes: Routes = [
    {
        path: '',
        redirectTo:'problems',
        pthMatch:'full'
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
        component:'http://google.com'
    }
];

export const routing = RouterModule.forRoot(routes);