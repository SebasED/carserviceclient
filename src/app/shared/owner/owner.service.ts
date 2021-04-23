import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  url = "https://thawing-chamber-47973.herokuapp.com/owners"

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(this.url);
  }

  get(id: string): Observable<any>{
    return this.http.get(this.url + '/' + id);
  }

  save(owner: any): void {
   this.http.put(owner.href, owner);
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
