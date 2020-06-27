import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    const { email, password } = f.form.value;
    //todo: do your checking here
    this.auth
      .signIn(email, password)
      .then((res) => {
        this.router.navigateByUrl('/');
        this.toastr.success('SignIn Successful');
      })
      .catch((err) => {
        console.log('err.message');
        this.toastr.error('SignIn Failed');
      });
  }
}
