import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-auth',
    templateUrl: 'auth.view.html',
    styleUrls: ['auth.view.scss']
})

export class AuthViewComponent implements OnInit, OnDestroy {

    private _unsubscribe$ = new Subject<void>();
    constructor() { }

    ngOnInit() { }

    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}