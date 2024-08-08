import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../models/Usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css'],
})
export class SingInComponent {
  constructor(private authService: AuthService) {}

  lstUsuarios: Usuario[] = [
    new Usuario(
      1,
      'admin',
      'admin',
      'admin.admin@gmail.com',
      'Admin',
      '_Admin_'
    ),
    new Usuario(
      2,
      'jnavas',
      'josenavas',
      'jose.navasordonez@gmail.com',
      'Jose',
      'Navas'
    ),
  ];
  usuarioActual = new Usuario(0,'', '', '', '', '');
  username: string = '';
  password: string = '';
  newName: string = '';
  newLastName: string = '';
  newEmail: string = '';
  newUsername: string = '';
  newPassword: string = '';
  loggedIn: boolean = false;
  registerMode: boolean = false;

  onLogin() {
    // Iterar sobre la lista de usuarios y verificar las credenciales
    for (let usuario of this.lstUsuarios) {
      if (
        this.username === usuario.nombreUsuario &&
        this.password === usuario.contraseña
      ) {
        this.loggedIn = true;
        this.usuarioActual = usuario;
        this.authService.login(this.usuarioActual);
        return; // Salir del bucle si se encuentra una coincidencia
      }
    }
    // Si no se encuentra una coincidencia, mostrar un mensaje de alerta
    Swal.fire({
      icon: 'error',
      title: 'Credenciales inválidas',
      text: 'Las credenciales ingresadas no coinciden o el usuario no esta registrado!',
    });  }

  onRegister() {
    // Validar que se hayan ingresado un correo electrónico, nombre de usuario y contraseña
    if (
      this.newEmail &&
      this.newUsername &&
      this.newPassword &&
      this.newName &&
      this.newLastName
    ) {
      // Verificar si el nombre de usuario ya está en uso
      const usernameExists = this.lstUsuarios.some(
        (usuario) => usuario.nombreUsuario === this.newUsername
      );

      if (usernameExists) {
        alert('El nombre de usuario ya está en uso. Por favor, elige otro.');
      } else {
        // Crear una instancia de Usuario con los datos del nuevo usuario
        const nuevoUsuario = new Usuario(
          0,
          this.newUsername,
          this.newPassword,
          this.newEmail,
          this.newName,
          this.newLastName
        );

        // Agregar el nuevo usuario a la lista de usuarios
        this.lstUsuarios.push(nuevoUsuario);

        // Establecer el estado de inicio de sesión y salir del modo de registro
        this.usuarioActual = nuevoUsuario;
        this.authService.login(this.usuarioActual);
        this.registerMode = false;
      }
    } else {
      alert(
        'Por favor, ingresa un correo electrónico, nombre de usuario y contraseña válidos'
      );
    }
  }

  logout() {
    this.authService.logout();
    this.loggedIn = this.authService.loggedIn;
    this.username = '';
    this.password = '';
    this.newName = '';
    this.newLastName = '';
    this.newEmail = '';
    this.newUsername = '';
    this.newPassword = '';
  }

  toggleRegisterMode() {
    this.registerMode = !this.registerMode;
  }
}
