import { NgModule } from '@angular/core';
import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundViewComponent } from './not-found.view';

import { SharedModule } from '../../shared/shared.module';

import { NzResultModule } from 'ng-zorro-antd/result';


@NgModule({
    declarations: [NotFoundViewComponent],
    imports: [NotFoundRoutingModule,SharedModule,NzResultModule],
    providers: [],
    entryComponents: []
})

export class NotFoundModule { }