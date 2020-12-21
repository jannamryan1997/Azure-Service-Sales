import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-reports',
    templateUrl: 'reports.view.html',
    styleUrls: ['reports.view.scss']
})

export class ReportsViewComponent implements OnInit, OnDestroy {
    
    private _unsubscribe$ = new Subject<void>();
    constructor() { }

    ngOnInit() { }

    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}