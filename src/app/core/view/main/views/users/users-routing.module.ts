import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersViewComponent } from './users.view';

const UsersRoutes: Routes = [{ path: '', component: UsersViewComponent }];

@NgModule({
    imports: [RouterModule.forChild(UsersRoutes)],
    exports: [RouterModule]
})

export class UsersRoutingModule { }
