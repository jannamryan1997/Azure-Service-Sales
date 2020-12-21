import { NgModule } from '@angular/core';
import { HomeViewComponent } from './home.view';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { CreateSubscriptionModal } from './modals';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [HomeViewComponent,CreateSubscriptionModal],
    imports: [SharedModule,HomeRoutingModule,CommonModule,ReactiveFormsModule,FormsModule],
    providers: [],
    entryComponents: [CreateSubscriptionModal]
})

export class HomeModule { }