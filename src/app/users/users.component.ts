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
    this.http.get<Array<any>>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        shareReplay()
      )
      .subscribe(res => {
        this.users = res;
        console.log(res);
      });
  }

}
