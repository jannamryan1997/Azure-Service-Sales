import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EUserRole } from '../../models/users';
import { MainViewComponent } from './main.view';

const mainRoutes: Routes = [{ path: '', component: MainViewComponent, 
children: [
    {path:'',pathMatch:'full',redirectTo:'home'},
    { 
        path: 'home', 
        loadChildren: () => import('./views/home/home.module')
        .then(m => m.HomeModule),
        data: {
            enabledRoles: [EUserRole.Administrator,EUserRole.Engineer]
        },
     },
    ]
}
]

@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule]
})

export class MainRoutingModule { }