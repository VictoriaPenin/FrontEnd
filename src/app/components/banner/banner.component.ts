import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  isLogged = false;

  constructor(private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    // Con esto verifico si el token existe y se establece la variable isLogged 
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut(): void {
    // esto es para cerrar sesión y recargar la página
    this.tokenService.logOut();
    window.location.reload();
  }

  login(): void {
    // este para redirigir a la página de inicio de sesión
    this.router.navigate(['/login']);
  }
}
