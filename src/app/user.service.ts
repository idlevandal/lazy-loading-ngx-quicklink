import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(userCount: number): any {
    return this.http.get<Array<any>>(`https://jsonplaceholder.typicode.com/users?_start=0&_limit=${userCount}`)
      .pipe(
        shareReplay()
      )
  }
}
