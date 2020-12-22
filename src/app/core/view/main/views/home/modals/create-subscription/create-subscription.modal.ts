import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-create-subscription-modal',
    templateUrl: 'create-subscription.modal.html',
    styleUrls: ['create-subscription.modal.scss']
})

export class CreateSubscriptionModal implements OnInit, OnDestroy {
    private _unsubscribe$ = new Subject<void>();
    public validateForm!: FormGroup;
   public  slideConfig = { };
   public slides = [
    {},
    {},
    {},
    {},
];
    constructor(private modal: NzModalRef, private _fb: FormBuilder) {
        this.slideConfig = {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            autoplay: false,
            autoplaySpeed: 2000
        }
     }

    ngOnInit() {
        this._formBuilder();
    }

    submitForm(): void {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
    }

    private _formBuilder(): void {
        this.validateForm = this._fb.group({
            phone: [null],
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
