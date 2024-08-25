import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { globalRoutes } from './modules/global/global.routing';
import { policyRoutes } from './modules/policy-holder/policy-holder.routing';


@NgModule({
    imports: [RouterModule.forChild([
        ...globalRoutes,
        ...policyRoutes,
    ])],
    exports: [RouterModule]
})

export class RoutesModule{}