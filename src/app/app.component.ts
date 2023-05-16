import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolioap';
  constructor(private router: Router) {
  }
  goToProyecto() {
    this.router.navigate(['/', 'proyecto']);
  }
  goToHys() {
    this.router.navigate(['/', 'hys']);
  }
  goToExperiencia() {
    this.router.navigate(['/', 'experiencia']);
  }
  goToEducacion() {
    this.router.navigate(['/', 'educacion']);
  }

}
