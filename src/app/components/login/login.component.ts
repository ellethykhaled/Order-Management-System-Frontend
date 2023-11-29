import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import * as JWT from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, 
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router){}
  get email() {
    return this.loginForm.controls['email'];
  }
  get password() { 
    return this.loginForm.controls['password']; 
  }
  loginUser() {
    const { email, password } = this.loginForm.value;

      
        this.authService.login(email, password).subscribe({
          next: (value) => {
            console.log(value);
            const user: any = JWT.jwtDecode(value);
            console.log(user);

            const role = user.roles[0];
            console.log(role);
            sessionStorage.setItem('token', value);
            sessionStorage.setItem('email', email as string);
            sessionStorage.setItem('role', role);
            this.router.navigate(['/home']);
          },
          error: (err) => {
            console.log(err);
          },
        });

  //   this.authService.getUserByEmail(email as string).subscribe({
  //     next: (response) => {
  //       if (response.length > 0 && response[0].password === password) {
  //         this.authService.getUserRole(email as string).subscribe({
  //           next: (user) => {
  //           if(user){
  //             const role = user.role
  //             sessionStorage.setItem('email', email as string);
  //             sessionStorage.setItem('role', role); 
  //             this.router.navigate(['/home']);
  //           }else{
  //               this.snackBar.open('Error getting user role.', 'Close', {
  //                 duration: 3000,
  //               });
  //           }
  //         },
  //         });
  //       } else {
  //         this.snackBar.open("Email or Password isn't correct.", 'Close', {
  //           duration: 3000, 
  //         });
  //       }
  //     },
  //     error: (e) => {
  //       this.snackBar.open('Something Went wrong!', 'Close', {
  //         duration: 3000, 
  //       });
  //     }
    
  // })
  }
}
