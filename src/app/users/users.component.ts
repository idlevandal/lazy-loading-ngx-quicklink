import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: Array<any>;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Array<any>>('https://jsonplaceholder.typicode.com/users?_start=0&_limit=5')
      .subscribe(res => this.users = res);
  }
  
  trackByUserId(index: number, user: any) {
    return user.id;
  }
  
  getEmployees(): void {
    this.http.get<Array<any>>('https://jsonplaceholder.typicode.com/users?_start=0&_limit=6')
    .subscribe(res => this.users = res);
  }

}