import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../services/http.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  constructor(
    private httpService : HttpService){
  }

  
  ngOnInit(): void {
      this.FindAll()
  }


  FindAll() {
    this.httpService.findAll(10, 0, '')
    .subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error) => {
        console.error('Error al obtener datos:', error);
      }
    });

  }

}
