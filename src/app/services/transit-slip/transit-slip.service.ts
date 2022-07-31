import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class TransitSlipService {

  constructor(private httpClient: HttpClient) { }

  url: string = "http://" + environment.sdmsApiBaseUrl + ":" + environment.sdmsApiPort.toString() + "/";

  create(){
    return this.httpClient.post<any>(this.url + 'create-transit-slip', headerOption);
  }

  getById(){
    return this.httpClient.post<any>(this.url + 'get-user-by-id', headerOption);
  }

  getBySlipNo(){
    return this.httpClient.post<any>(this.url + 'get-transit-slip-by-slip-no', headerOption);
  }

  delete(){
    return this.httpClient.delete<any>(this.url + 'delete-transit-slip', headerOption);
  }
 
  update(){
    return this.httpClient.patch<any>(this.url + 'update-transit-slip', headerOption);
  }
 
  getAllByUser(){
    return this.httpClient.post<any>(this.url + 'get-transit-slip-by-user', headerOption);
  }
}
