import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  private baseURL = "https://www.mobilitaetproto.tk/";

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    console.log("GET USERS");
    return this.http.get<User[]>(this.baseURL+"user");
  }

  public getUser(id: number): Observable<User>
  {
    console.log("GET USER: " + id);
    return this.http.get<User>(this.baseURL+"user/"+id);
  }

  public addUser(user: User): Observable<User> {
    console.log("ADD USER", user);
    return this.http.post<User>(this.baseURL+"user",user);
  }

  public removeUser(user: User) {
    console.log("REMOVE USER", user);
    this.http.delete<User>(this.baseURL+"user/"+user._id);
  }

  public updateUser(user: User) {
    console.log("UPDATE USER", user)
    this.http.put<User>(this.baseURL+"user/"+user._id,user);
  }
}