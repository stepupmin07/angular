import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable()
export class ContactDataService {

  constructor(private http: HttpClient) { }
  queryData():Promise<any>{
    //return this.http.get('https://jsonplaceholder.typicode.com/posts');
 
    return this.http.get('https://api.publicapis.org/categories').toPromise();
  }

}
