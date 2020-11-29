import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: Array<any>;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers(5)
      .subscribe(res => this.users = res);
  }
  
  trackByUserId(index: number, user: any) {
    return user.id;
  }
  
  getEmployees(): void {
    this.userService.getUsers(6)
      .subscribe(res => this.users = res);
  }

}