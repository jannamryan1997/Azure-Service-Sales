import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';

import { MainViewComponent } from './main.view';

import { MainService } from './main.srvice';

import { NavBarComponent } from './component';

import { SharedModule } from '../../shared/shared.module';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

///ng-zorro
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@NgModule({
    declarations: [MainViewComponent,NavBarComponent],
    imports: [MainRoutingModule,SharedModule,CommonModule,ReactiveFormsModule,FormsModule,NzLayoutModule,NzMenuModule],
    providers: [MainService],
    entryComponents: []
})

export class MainModule { }