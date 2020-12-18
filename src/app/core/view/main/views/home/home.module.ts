import { NgModule } from '@angular/core';
import { HomeViewComponent } from './home.view';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    declarations: [HomeViewComponent],
    imports: [SharedModule,HomeRoutingModule],
    providers: [],
    entryComponents: []
})

export class HomeModule { }