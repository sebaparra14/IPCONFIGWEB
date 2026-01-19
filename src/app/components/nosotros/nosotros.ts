import { CommonModule, DecimalPipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  imports: [CommonModule],
  providers: [DecimalPipe],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.scss',
})
export class Nosotros implements OnInit {
// Valores finales
  stats = [
    { valor: 10, label: 'Años de experiencia', actual: 0 },
    { valor: 400, label: 'Equipos gestionados', actual: 0 },
    { valor: 120, label: 'Soluciones brindadas', actual: 0 },
    { valor: 59, label: 'Clientes satisfechos', actual: 0 }
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.animarContadores();
  }

  animarContadores() {
    this.stats.forEach(stat => {
      const pasos = 50; // Cantidad de frames de la animación
      const incremento = stat.valor / pasos;
      const intervaloTiempo = 80; // milisegundos

      const timer = setInterval(() => {
        stat.actual += incremento;
        
        if (stat.actual >= stat.valor) {
          stat.actual = stat.valor;
          clearInterval(timer);
        }
        
        // FORZAMOS A ANGULAR A RE-RENDERIZAR EL NÚMERO
        this.cdr.detectChanges(); 
      }, intervaloTiempo);
    });
  }
}