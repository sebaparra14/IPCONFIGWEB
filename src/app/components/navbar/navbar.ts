import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  menuAbierto = false;
  dropdownAbierto = false;
  ultimoScroll = 0;
  navOculto = false;

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  cerrarMenu() {
    this.menuAbierto = false;
    this.dropdownAbierto = false; // También cerramos el dropdown por seguridad
  }

  // Funciones para manejar el mouse
  mostrarDropdown() { this.dropdownAbierto = true; }
  ocultarDropdown() { this.dropdownAbierto = false; }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollActual = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollActual > this.ultimoScroll && scrollActual > 100) {
      // Bajando - Ocultar
      this.navOculto = true;
    } else {
      // Subiendo - Mostrar
      this.navOculto = false;
    }
    this.ultimoScroll = scrollActual <= 0 ? 0 : scrollActual;
  }

  // No olvides mantener tus funciones de toggleMenu y dropdown
}