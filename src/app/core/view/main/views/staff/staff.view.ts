import { Component, OnDestroy, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Subject } from 'rxjs';
import { CreateEmployeeModal } from './modals';

@Component({
    selector: 'app-staf',
    templateUrl: 'staff.view.html',
    styleUrls: ['staff.view.scss']
})

export class StaffViewComponent implements OnInit, OnDestroy {
    private _unsubscribe$ = new Subject<void>();
    public current= 1;
    constructor(private modalService:NzModalService) { }

    ngOnInit() { }

    public showModal():void{
this.modalService.create({
    nzTitle:'Управление сотрудника',
    nzContent:CreateEmployeeModal
})
    }

    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}