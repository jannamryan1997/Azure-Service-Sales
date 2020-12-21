import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Subject } from 'rxjs';
import { UserModal } from './modals';


@Component({
    selector: 'app-users',
    templateUrl: 'users.view.html',
    styleUrls: ['users.view.scss']
})

export class UsersViewComponent implements OnInit, OnDestroy {
    private _unsubscribe$ = new Subject<void>();
    constructor(private modalService: NzModalService) { }

    ngOnInit() { }

    public showModal(): void {
        this.modalService.create({
            nzTitle: 'Управление Пользователям',
            nzContent: UserModal
        });
    }

    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}