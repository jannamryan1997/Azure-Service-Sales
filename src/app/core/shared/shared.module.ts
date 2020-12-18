import { NgModule } from '@angular/core';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
    declarations: [],
    imports: [
        NzFormModule,
        NzIconModule,
        NzInputModule,
        NzCheckboxModule,
        NzButtonModule
    ],
    entryComponents: [],
    providers: [],
    exports: [
        NzFormModule,
        NzIconModule,
        NzInputModule,
        NzCheckboxModule,
        NzButtonModule
    ],
})

export class SharedModule { }