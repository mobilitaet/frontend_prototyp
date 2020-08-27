import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User, UserType } from '../models';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  providers: [UserService, FormBuilder],
})
export class UserlistComponent implements OnInit {

  public users: User[];
  public userForm: FormGroup;
  public userTypes = UserType;
  public userTypeOptions: UserType[] = [UserType.STUDENT, UserType.TEACHER];
  public isUserFormHidden = true;

  constructor(private userService: UserService,
    private formBuilder: FormBuilder) {
    this.resetUserForm();
  }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  public onClick(event) {
    this.userForm = this.formBuilder.group({
      id: event.data.id,
      firstname: event.data.firstname,
      lastname: event.data.lastname,
      userType: event.data.userType
    });
    this.isUserFormHidden = false;
  }

  public onUserSave(value) {
    if (this.users.find((user: User) => user.id == value.id) == undefined) {
      let user = this.userService.addUser(value);
      this.users.push(user);
    } else {
      this.userService.updateUser(value);
      this.users[this.users.findIndex((user: User) => user.id == value.id)] = value;
    }
    this.isUserFormHidden = true;
  }

  private resetUserForm() {
    this.userForm = this.formBuilder.group({
      id: -1,
      firstname: '',
      lastname: '',
      userType: 0
    });
  }

  public addUser() {
    this.resetUserForm();
    this.isUserFormHidden = false;
  }

  public deleteUser(event)
  {
    this.userService.removeUser(event.data);
    this.users = this.users.filter((item: User) => item.id != event.data.id);
  }
}
