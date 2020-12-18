import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AuthViewComponent } from "./auth.view";


const authRoutes: Routes = [{
    path: '', component: AuthViewComponent, children:
        [
            {path:'',pathMatch:'full',redirectTo:'login'},
            {
                path:'login',
                loadChildren:() =>import('./login/login.module').then(m=>m.LoginModule)
        }
        ]
}]

@NgModule({
    imports: [RouterModule.forChild(authRoutes)],
    exports: [RouterModule],
})

export class AuthRoutingModule { }