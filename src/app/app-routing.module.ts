import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuGlobalComponent } from './modules/global/components/menu-global/menu-global.component';

const routes: Routes = [
  {
    path: '',
    component: MenuGlobalComponent,
    loadChildren : () => import('./routes.modules').then(m => m.RoutesModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
