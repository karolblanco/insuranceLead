import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { GlobalModule } from '../global/global.module';
import { FormComponent } from './components/form/form.component';
import { ToastrModule } from 'ngx-toastr';
import { EditComponent } from './components/edit/edit.component';


@NgModule({
  declarations: [
    IndexComponent,
    FormComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    GlobalModule,
    ToastrModule,

  ]
})
export class PolicyHolderModule { }
