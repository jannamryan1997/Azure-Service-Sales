import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Subject } from 'rxjs';
import { CreateSubscriptionModal } from './modals';

@Component({
    selector: 'app-home',
    templateUrl: 'home.view.html',
    styleUrls: ['home.view.scss']
})

export class HomeViewComponent implements OnInit, OnDestroy {

    private _unsubscribe$ = new Subject<void>();
    public checked;
    public validateForm!: FormGroup;

    constructor(private modalService: NzModalService,private _fb:FormBuilder) { }

    ngOnInit() { 
      this._formBuilder();
    }

   public submitForm(): void {
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
  }

  private _formBuilder():void{
      this.validateForm = this._fb.group({
        });
  }

   public   showModal(): void {
        this.modalService.create({
          nzTitle: 'Управление подпиской',
          nzContent: CreateSubscriptionModal
        });
      }
    


    ngOnDestroy() { 
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}