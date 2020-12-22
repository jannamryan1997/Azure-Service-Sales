import { NgModule } from '@angular/core';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

//ngx
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
    declarations: [],
    imports: [
        NzFormModule,
        NzIconModule,
        NzInputModule,
        NzCheckboxModule,
        NzButtonModule,
        NzModalModule,
        NzDropDownModule,
        NzCalendarModule,
        NzGridModule,
        NzDatePickerModule,
        NzCardModule,
        NzPageHeaderModule,
        NzListModule,
        NzTableModule,
        NzPaginationModule,
        SlickCarouselModule,
   
    ],
    entryComponents: [],
    providers: [],
    exports: [
        NzFormModule,
        NzIconModule,
        NzInputModule,
        NzCheckboxModule,
        NzButtonModule,
        NzModalModule,
        NzDropDownModule,
        NzCalendarModule,
        NzGridModule,
        NzDatePickerModule,
        NzCardModule,
        NzPageHeaderModule,
        NzListModule,
        NzTableModule,
        NzPaginationModule,
        SlickCarouselModule
    ],
})

export class SharedModule { }