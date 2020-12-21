import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportsViewComponent } from './reports.view';
import { ReportsRoutingModule } from './reports-routing.module';


@NgModule({
    declarations: [ReportsViewComponent],
    imports: [ReportsRoutingModule,SharedModule,CommonModule,ReactiveFormsModule,FormsModule],
    providers: [],
    entryComponents: []
})

export class ReportsModule { }