import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EUserRole } from '../../models/users';
import { MainViewComponent } from './main.view';

const mainRoutes: Routes = [{
    path: '', component: MainViewComponent,
    children: [
        { path: '', pathMatch: 'full', redirectTo: 'home' },
        {
            path: 'home',
            loadChildren: () => import('./views/home/home.module')
                .then(m => m.HomeModule),
            data: {
                enabledRoles: [EUserRole.Administrator, EUserRole.Engineer]
            },
        },

        {
            path: 'users',
            loadChildren: () => import('./views/users/users.module')
                .then(m => m.UsersModule),
            data: {
                enabledRoles: [EUserRole.Administrator, EUserRole.Engineer]
            },
        },
        {
            path: 'reports',
            loadChildren: () => import('./views/reports/reports.module')
                .then(m => m.ReportsModule),
            data: {
                enabledRoles: [EUserRole.Administrator, EUserRole.Engineer]
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