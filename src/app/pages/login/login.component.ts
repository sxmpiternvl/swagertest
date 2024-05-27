import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginObj: Login = new Login();

  constructor(private http: HttpClient) { }

  onLogin() {
    this.http.post('http://localhost:3000/api/User/Login', this.loginObj, { observe: 'response' }).subscribe(
      {
        next: (data: HttpResponse<any>) => {
          console.log(data);
          alert((data.status + data.body.message));
        },
        error: (err) => {
          alert(err.error.cod + err.error.message);
        }
      }
    );
  }
}
export class Login {
  EmailId: string;
  Password: string;

  constructor() {
    this.EmailId = '';
    this.Password = '';
  }
}
