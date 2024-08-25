import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class HttpService {

    constructor(private httpClient : HttpClient) { }
    
    findAll(size: number, page: number, search: string) {
        let paramsHttp = new HttpParams();
        paramsHttp = paramsHttp.append('size', size);
        paramsHttp = paramsHttp.append('page', page);
        paramsHttp = paramsHttp.append('search', search);
        return this.httpClient.get('http://localhost:7196/api/PolicyHolder' , {params: paramsHttp});
    }
}