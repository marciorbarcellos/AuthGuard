import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { AuthGuardService as AuthGuard } from './auth-guard.service';
import { ChildComponent } from './src/app/child/child/child.component';

const routes:Routes=[
    {
        path:'home', component: HomeComponent, canActivateChild:[AuthGuard],
        children: [
            { path: "ch", component: ChildComponent }
            // { path: "ch1", component: Child1Component }
        ]
    },
    {
        path:'**', component: LoginComponent
    }
]
@NgModule({
    imports:[RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports:[RouterModule],
    providers:[]
})
export class AppRoutingModule{

}


