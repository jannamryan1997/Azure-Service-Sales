import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-create-employee',
    templateUrl: 'create-employee.modal.html',
    styleUrls: ['create-employee.modal.scss']
})

export class CreateEmployeeModal implements OnInit, OnDestroy {

    private _unsubscribe$ = new Subject<void>();
    public validateForm:FormGroup;

    constructor(private _fb:FormBuilder,private modal:NzModalRef) { }

    ngOnInit() { 
        this._formBuilder();
    }

    submitForm(): void {
        for (const i in this.validateForm.controls) {
          this.validateForm.controls[i].markAsDirty();
          this.validateForm.controls[i].updateValueAndValidity();
        }
    }

    private _formBuilder():void{
        this.validateForm = this._fb.group({
            name:['',Validators.required],
            loginUrl:['',Validators.required],
            email:['',Validators.required],
            country:['',Validators.required],
            city:['',Validators.required],
            postcode:['',Validators.required],
            address:['',Validators.required],
            INN:['',Validators.required],
            domain:['',Validators.required],
            login:['',Validators.required],
            companyName:['',Validators.required],
            name2:['',Validators.required],
            surname:['',Validators.required],
            regionCode:['',Validators.required],
            phone:['',Validators.required],
            organization:[true]

          });
    }

    public destroyModal(): void {
        this.modal.destroy();
      }

    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}