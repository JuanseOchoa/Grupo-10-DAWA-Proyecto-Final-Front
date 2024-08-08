import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../models/Usuario';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private authService: AuthService) {}
  usuarioActual = this.authService.usuarioActual;

  onLogout() {
    this.authService.logout();
  }
}
