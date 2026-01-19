import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
 // Solución al ERROR TS2339: Definir las propiedades exactas
  iconoFacebook = faFacebookF;
  iconoWhatsapp = faWhatsapp;
  iconoGmail = faEnvelope;
}
