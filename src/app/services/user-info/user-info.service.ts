import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private httpClient: HttpClient) { }

  url: string = "http://" + environment.sdmsApiBaseUrl + ":" + environment.sdmsApiPort.toString() + "/";

  create(){
    return this.httpClient.post<any>(this.url + 'create-user', headerOption);
  }

  getById(){
    return this.httpClient.post<any>(this.url + 'get-user-by-id', headerOption);
  }

  getByUnAndPass(){
    return this.httpClient.post<any>(this.url + 'get-user-by-username-and-password', headerOption);
  }

  deleteById(){
    return this.httpClient.delete<any>(this.url + 'delete-user', headerOption);
  }
 
  updateById(){
    return this.httpClient.patch<any>(this.url + 'update-user', headerOption);
  }
 
  getByUn(){
    return this.httpClient.post<any>(this.url + 'get-user-by-username', headerOption);
  }

  getByLikeFln(){
    return this.httpClient.post<any>(this.url + 'get-user-like-fullname', headerOption);
  }

  getAll(){
    return this.httpClient.get<any>(this.url + 'get-all-user', headerOption);
  }
}
