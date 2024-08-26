import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../services/http.service';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { PolicyHolderService } from '../../../../services/policy-holder.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})

export class IndexComponent implements OnInit {
  displayedColumns: string[] = [
    'identificationNumber', 
    'firstName', 
    'lastName', 
    'secondLastName',
    'phone',
    'email',
    'birthDate',
    'estimatedValue',
    'remark',
    'actions'];

  dataSource =  new MatTableDataSource<any>([]);

    totalAmount = 0;
    size = 10;
    pageNumber = 0;
    pageOptions : number[] = [1,5,10,25];

    searchText = '';
    selectedId: number | undefined;
    modalType: string | undefined;

  constructor(
    private httpService : HttpService,
    private toastr : ToastrService,
    public dialog : MatDialog,
    private policyHolderService: PolicyHolderService,
  ){
  }

  
  ngOnInit(): void {
      this.FindAll();
      this.policyHolderService.policyHolderObservable.subscribe(() => {
        this.FindAll();
      });
  }


  FindAll() {
    this.httpService.findAll(this.size, this.pageNumber, this.searchText)
    .subscribe({
      next: (response: any) => {
        this.dataSource.data = response.data.element;
        this.totalAmount = response.data.total;
      },
      error: (error) => {
        console.error('Error al obtener datos:', error);
      }
    });

  }

  changePage(event: any) {
    this.size = event.pageSize;
    this.pageNumber = event.pageIndex;

    this.FindAll();
  }

  delete(holderId: number) {
    let validate = confirm("¿Está seguro/a que desea eliminar el elemento?");
    
    if(validate) {
      let id = holderId;

      this.httpService.delete(holderId)
      .subscribe({
        next: (response: any) => {
          this.toastr.success('Elemento eliminado satisfactoriamente', 'Confirmación')
          this.FindAll();
        },
        error: (error) => {
          console.error('Error al obtener datos:', error);
        }
      });
    }
  }

  createHolder() {
  const dialogRef =  this.dialog.open(FormComponent, {
    disableClose: true,
    autoFocus: true,
    closeOnNavigation: false,
    position: { top: '30px'},
    width: '700px',
    data: {
      type: 'Create'
    }
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log(`dialog result: ${result}`);
  })

  }

  editModal(){
    
  }
  
}
