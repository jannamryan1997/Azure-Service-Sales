import { NgModule } from "@angular/core";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginViewComponent } from "./login.view";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { SharedModule } from "src/app/core/shared/shared.module";


@NgModule({
    declarations: [LoginViewComponent],
    imports: [
        LoginRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
       ],
    providers: [],
    entryComponents: []
})

export class LoginModule { }