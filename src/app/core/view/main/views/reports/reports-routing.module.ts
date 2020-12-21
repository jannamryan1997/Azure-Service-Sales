import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsViewComponent } from './reports.view';


const reportsRoutes: Routes = [{ path: '', component: ReportsViewComponent }];

@NgModule({
    imports: [RouterModule.forChild(reportsRoutes)],
    exports: [RouterModule]
})

export class ReportsRoutingModule { }