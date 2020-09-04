export class User {
    _id: number;
    firstname: string;
    lastname: string;
    userType: UserType;
}

export enum UserType {
    STUDENT = 0,
    TEACHER = 1
}