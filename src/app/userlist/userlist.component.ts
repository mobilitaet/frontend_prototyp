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
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users
    });
  }

  public onClick(event) {
    this.userForm = this.formBuilder.group({
      _id: event.data._id,
      firstname: event.data.firstname,
      lastname: event.data.lastname,
      userType: event.data.userType
    });
    this.isUserFormHidden = false;
  }

  public onUserSave(value) {
    if (this.users.find((user: User) => user._id == value._id) == undefined) {
      this.userService.addUser(value).subscribe((user: User) => {
        if(user != undefined && user != null)
        {
          this.users.push(user);
        }
      });
    } else {
      this.userService.updateUser(value);
      for(let i = 0; i < this.users.length; i++)
      {
        if(this.users[i]._id == value._id)
        {
          this.users[i] = value;
        }
      }
    }
    this.isUserFormHidden = true;
  }

  private resetUserForm() {
    this.userForm = this.formBuilder.group({
      _id: -1,
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
    this.users = this.users.filter((item: User) => item._id != event.data._id);
  }
}
