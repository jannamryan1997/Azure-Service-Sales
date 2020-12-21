import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { UsersViewComponent } from './users.view';
import { UserModal } from './modals';

@NgModule({
    declarations: [UsersViewComponent,UserModal],
    imports: [UsersRoutingModule,SharedModule,CommonModule,ReactiveFormsModule,FormsModule],
    providers: [],
    entryComponents: [UserModal]
})

export class UsersModule { }