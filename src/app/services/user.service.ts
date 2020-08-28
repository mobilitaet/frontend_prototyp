import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  constructor() { this.nextId = 5 }

  private nextId: number;

  private users: User[] = [
    {
      id: 1,
      firstname: 'Manuel',
      lastname: 'Neuer',
      userType: 0,
    },
    {
      id: 2,
      firstname: 'Jerome',
      lastname: 'Boateng',
      userType: 0,
    },
    {
      id: 3,
      firstname: 'David',
      lastname: 'Alaba',
      userType: 0,
    },
    {
      id: 4,
      firstname: 'Hans-Dieter',
      lastname: 'Flick',
      userType: 1,
    },
  ];

  public getUsers(): User[] {
    return JSON.parse(JSON.stringify(this.users));
  }

  public getUser(id: number): User
  {
    return this.users.find((user: User) => user.id == id);
  }

  public addUser(user: User): User {
    user.id = this.nextId++;
    this.users.push(user);
    return user;
  }

  public removeUser(user: User) {
    this.users = this.users.filter((item: User) => item.id != user.id);
  }

  public updateUser(user: User) {
    this.removeUser(user);
    this.users.push(user);
  }
}
