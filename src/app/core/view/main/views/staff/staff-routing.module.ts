import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffViewComponent } from './staff.view';

const staffRoutes: Routes = [{ path: '', component: StaffViewComponent }]

@NgModule({
    imports: [RouterModule.forChild(staffRoutes)],
    exports: [RouterModule]
})

export class StafrfRoutingModule { }