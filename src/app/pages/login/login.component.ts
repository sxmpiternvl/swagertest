import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginObj: Login;

  constructor(private http: HttpClient) {
    this.loginObj = new Login();
  }

  onLogin() {
    this.http.post('http://localhost:3000/api/User/Login', this.loginObj).subscribe(
      (res: any) => {
        if (res.result) {
          alert("LOGIN SUCCESS");
        } else {
          alert(res.message);
        }
      },
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
