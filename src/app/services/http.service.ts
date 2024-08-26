import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class HttpService {
    private  apiUrl = 'https://localhost:7196/api/policyHolder/'; 

    constructor(private httpClient : HttpClient) { }
    
    findAll(size: number, page: number, search: string) {
        let paramsHttp = new HttpParams();
        paramsHttp = paramsHttp.append('size', size);
        paramsHttp = paramsHttp.append('page', page);
        paramsHttp = paramsHttp.append('search', search);
        return this.httpClient.get(this.apiUrl , {params: paramsHttp});
    }

    delete(id : number) {
        const option = {
            headers: new HttpHeaders({
                'Content-Type' : 'application/json'
            })
        }
        return this.httpClient.delete(this.apiUrl+`${id}`, option)
    }

    createPolicyHolder(policyHolder: any) {
        return this.httpClient.post<any>(this.apiUrl, policyHolder);
      }
    
    findPolicyHolderById(id: number) {
        return this.httpClient.get<any>(this.apiUrl+`${id}`)
         
        }
    
    }


        