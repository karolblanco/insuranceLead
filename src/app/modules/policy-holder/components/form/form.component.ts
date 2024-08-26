import { Component, Inject, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from '../../../../services/http.service';
import { ToastrService } from 'ngx-toastr';
import { PolicyHolderService } from '../../../../services/policy-holder.service';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

    formGroup! : FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<FormComponent>,
    private fb: FormBuilder,
    private httpService: HttpService,
    private toastr : ToastrService,
    private policyHolderService: PolicyHolderService

  ){

  }

  ngOnInit(): void {
      this.initForm();

  }
  cancel(){
    this.dialogRef.close();
  }

  save() {
    if (this.formGroup.valid) {
      const policyHolder = this.formGroup.value;
        this.httpService.createPolicyHolder(policyHolder).subscribe({
          next: (response: any) => {
            this.toastr.success('Policy Holder creado satisfactoriamente', 'Confirmación');
            this.policyHolderService.notifyPolicyHolderChange();
            this.dialogRef.close(true);
          },
          error: (error) => {
            console.error('Error al crear Policy Holder:', error);
          }
        });
    } else {
      this.toastr.error('Por favor, complete todos los campos requeridos', 'Error');
    }
  }

  initForm() {
    this.formGroup = this.fb.group({
      identificationNumber:  [{value: null, disabled:false },[Validators.required]],
      firstName: [{value: null, disabled:false } ,          [Validators.required]], 
      middleName: [{value: null, disabled:false }],
      lastName:[{value: null, disabled:false },             [Validators.required]],
      secondLastName:[{value: null, disabled:false },       [Validators.required]],
      phone: [{value: null, disabled:false },               [Validators.required]],
      email:[{value: null, disabled:false },  [Validators.required, Validators.email]],
      birthDate:[{value: null, disabled:true },            [Validators.required]],
      estimatedValue:[{value: null, disabled:false },       [Validators.required]],
      remark: [{value: null, disabled:false }],
    });
  }
}
