//check the user is the customer or staff, because the staff have the extra function to monitoring the application.
export enum UserType {
    STAFF = 0,
    CUSTOMER = 1,
}

//checking the user have login or not. Is logged, the heafer menubar will display the p-avatar image
//Is not, the header menubar similar like now, have the sign up and login button
export enum Logintype {
  LOGIN = 0,
  NLOGIN = 1,
}