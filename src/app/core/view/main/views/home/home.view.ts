import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: 'home.view.html',
    styleUrls: ['home.view.scss']
})

export class HomeViewComponent implements OnInit, OnDestroy {

    private _unsubscribe$ = new Subject<void>();

    constructor() { }

    ngOnInit() { }

    ngOnDestroy() { 
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}