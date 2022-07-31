import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  
  // login(username: string, password: string) {
  //   return this.http
  //     .post<any>(`${environment.apiUrl}/authenticate`, {
  //       username,
  //       password,
  //     })
  //     .pipe(
  //       map((user) => {
  //         // store user details and jwt token in local storage to keep user logged in between page refreshes

  //         localStorage.setItem('currentUser', JSON.stringify(user));
  //         this.currentUserSubject.next(user);
  //         return user;
  //       })
  //     );
  // }

  login(username: string, password: string) {
    let requestBody = {
      user_name: username,
      user_password: password
    };
    const headerOption = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let url: string = "http://" + environment.sdmsApiBaseUrl + ":" + environment.sdmsApiPort.toString() + "/";
    return this.http
      .post<any>(url + 'get-user-by-username-and-password', requestBody, headerOption)
      .pipe(
        map((o) => {
          let tempData = o?.payload?.output;
          let r: Role = Role.Student;
          r = tempData?.user_role === "Admin" ? Role.Admin : tempData?.user_role === "Instructor" ? Role.Teacher : tempData?.user_role === "Clerk" ? Role.Student : Role.Teacher;
          let user: User = {
            id: tempData?.id ?? 0,
            img: tempData?.user_role === "Admin" ? "assets/images/user/admin.jpg" : tempData?.user_role === "Instructor" ? "assets/images/user/teacher.jpg" : tempData?.user_role === "Clerk" ? "assets/images/user/student.jpg" : "assets/images/user/student.jpg",
            username: tempData?.user_name ?? "admin@school.org",
            firstName: tempData?.user_full_name ?? "",
            lastName: '',
            role: r,
            token: tempData?.user_role === "Admin" ? "admin-token" : tempData?.user_role === "Instructor" ? "teacher-token" : tempData?.user_role === "student-token" ? "Student" : "Student",
            password: tempData?.user_password ?? "student@123",
          };

          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    return of({ success: false });
  }
}
