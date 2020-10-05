import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getImgs(){
    return this.httpClient.get('https://dog.ceo/api/breeds/image/random');
  }
}
