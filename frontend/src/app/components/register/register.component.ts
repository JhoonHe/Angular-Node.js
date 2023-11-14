import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string = "";
  password: string = "";
  confirmPassword: string = "";
  loading: boolean = false;

  constructor(private toastr: ToastrService, private _userService: UserService, private router: Router, private _errorService: ErrorService) {
  }

  ngOnInit(): void {

  }

  addUser() {
    // Validamos valores
    if (this.username == "" || this.password == "" || this.confirmPassword == "") {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return;
    }

    // Validamos que las passwords sean iguales
    if (this.password !== this.confirmPassword) {
      this.toastr.error('Las passwords ingresadas son distintas', 'Error');
      return;
    }

    // Creamos el objeto
    const user: User = {
      username: this.username,
      password: this.password
    }

    this.loading = true;
    this._userService.register(user).subscribe({
      next: (v) => {
        this.loading = false;
        this.toastr.success(`El usuario ${this.username} fue registrado con exito`, 'Usuario registrado');
        this.router.navigate(['/login']);
      },
      error: (e) => {
        this.loading = false;
        this._errorService.msgError(e);
      },
      complete: () => console.log('complete'),
    });
  }

}
