import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NAVBAR_ITEMS } from 'src/app/core/globals/nav-bar-items';
import { NavBarItem } from 'src/app/core/models/nav-bar-item';



@Component({
    selector: 'app-nav-bar',
    templateUrl: 'nav-bar.component.html',
    styleUrls: ['nav-bar.component.scss']
})

export class NavBarComponent implements OnInit, OnDestroy {

    private _unsubscribe$ = new Subject<void>();
    public navBarItem:NavBarItem[] = [];

    ngOnInit() {
        this._filterSideBarItems();
     }

    private _filterSideBarItems(): void {
        const sideBarItems = NAVBAR_ITEMS;
        //  const userRole = this._userService.getUserSync()?.role;
        // this.navBarItem = sideBarItems.filter((element) => element.roles.includes(userRole));
        this.navBarItem = sideBarItems.filter((element) => element.roles);
    }

    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}