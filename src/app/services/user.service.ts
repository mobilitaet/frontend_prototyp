import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models';
import { Observable } from 'rxjs';
import { MessagingService } from "../service/messaging.service"

@Injectable({
  providedIn: 'root'
})
export class UserService{

  private baseURL = "https://www.mobilitaetproto.tk/";

  private tokenMessage = {
    "token": this.messageService.token
};

  constructor(private messageService: MessagingService, private http: HttpClient) {}

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
    this.tokenMessage["user"] = user;
    this.tokenMessage["token"] = this.messageService.token;
    console.log(this.tokenMessage);
    return this.http.post<User>(this.baseURL+"user",this.tokenMessage);
  }

  public removeUser(user: User) {
    console.log("REMOVE USER", user);
    this.tokenMessage["token"] = this.messageService.token;
    this.http.post(this.baseURL+"admin",this.tokenMessage).subscribe();
    console.log(this.baseURL+"admin");
    console.log(JSON.stringify(this.tokenMessage));
    return this.http.delete<User>(this.baseURL+"user/"+user._id);
  }

  public updateUser(user: User) {
    console.log("UPDATE USER", user);
    this.tokenMessage["user"] = user;
    this.tokenMessage["token"] = this.messageService.token;
    console.log(JSON.stringify(this.tokenMessage));
    return this.http.put<User>(this.baseURL+"user/"+user._id,this.tokenMessage);
  }
}