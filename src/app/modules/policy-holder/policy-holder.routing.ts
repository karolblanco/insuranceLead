import { Routes } from "@angular/router";
import { IndexComponent } from "./components/index/index.component";

export const policyRoutes: Routes = [

    {
        path: 'policyHolder/index',
        component: IndexComponent,
        loadChildren: () => import('./policy-holder.module').then( m => m.PolicyHolderModule)
    }
]; 