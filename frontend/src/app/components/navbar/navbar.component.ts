import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private toastr: ToastrService) {

  }

  ngOnInit(): void {

  }

  logOut() {
    this.toastr.success('Cierre de sesión exitoso!', 'Cerrar sesión');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
