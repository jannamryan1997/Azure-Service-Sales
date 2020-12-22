import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { Subject } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: 'login.view.html',
    styleUrls: ['login.view.scss']
})

export class LoginViewComponent implements OnInit, OnDestroy {

    private _unsubscribe$ = new Subject<void>();
    public validateForm!: FormGroup;
    constructor(private _fb:FormBuilder,private _router:Router) { }

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
            userName: [null, [Validators.required]],
            password: [null, [Validators.required]],
            remember: [true]
          });
    }

    public LogIn():void{
this._router.navigate(['/home']);
    }
    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}