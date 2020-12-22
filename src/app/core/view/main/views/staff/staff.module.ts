import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StafrfRoutingModule } from './staff-routing.module';
import { StaffViewComponent } from './staff.view';

import { CreateEmployeeModal } from './modals';

import { SharedModule } from 'src/app/core/shared/shared.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [StaffViewComponent,CreateEmployeeModal],
    imports: [StafrfRoutingModule,CommonModule, ReactiveFormsModule, FormsModule, SharedModule],
    providers: [],
    entryComponents: [CreateEmployeeModal]
})

export class StaffModule { }