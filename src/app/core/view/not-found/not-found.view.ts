import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-not-found',
    templateUrl: 'not-found.view.html',
    styleUrls: ['not-found.view.scss']
})

export class NotFoundViewComponent implements OnInit, OnDestroy {

    private _unsubscribr$ = new Subject<void>();

    constructor() { }

    ngOnInit() { }

    ngOnDestroy() {
        this._unsubscribr$.next();
        this._unsubscribr$.complete();
    }
}