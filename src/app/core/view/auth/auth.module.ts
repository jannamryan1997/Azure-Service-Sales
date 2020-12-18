import { NgModule } from "@angular/core";
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthViewComponent } from "./auth.view";


@NgModule({
    declarations: [AuthViewComponent],
    imports: [AuthRoutingModule],
    providers: [],
    entryComponents: []
})

export class AuthModule { }