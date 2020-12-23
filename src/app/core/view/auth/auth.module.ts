import { NgModule } from "@angular/core";
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthService } from "./auth.service";
import { AuthViewComponent } from "./auth.view";


@NgModule({
    declarations: [AuthViewComponent],
    imports: [AuthRoutingModule],
    providers: [AuthService],
    entryComponents: []
})

export class AuthModule { }