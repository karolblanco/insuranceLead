import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { IndexComponent } from './components/index/index.component';
import { MenuGlobalComponent } from './components/menu-global/menu-global.component';
import { RouterModule } from '@angular/router';
import {provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    IndexComponent,
    MenuGlobalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

    MatToolbarModule,
    MatIconModule
  ],
   exports: [
    MatToolbarModule,
    MatIconModule
  ],
  providers: [
    provideHttpClient()] 
})
export class GlobalModule { }
