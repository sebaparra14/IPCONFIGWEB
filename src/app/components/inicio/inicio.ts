import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
})
export class Inicio {
 servicios = [
    {
      titulo: 'Soporte Técnico',
      descripcion: 'Mantenimiento preventivo y correctivo de hardware. Reparación de laptops y computadoras de escritorio.',
      icono: '💻',
      detalles: ['Limpieza interna', 'Cambio de pasta térmica', 'Reparación de componentes']
    },
    {
      titulo: 'Cámaras de Seguridad',
      descripcion: 'Instalación y configuración de sistemas de videovigilancia CCTV e IP para hogares y empresas.',
      icono: '📹',
      detalles: ['Configuración móvil', 'Grabación en la nube', 'Cámaras con visión nocturna']
    },
    {
      titulo: 'Software y Programas',
      descripcion: 'Instalación de sistemas operativos, suites de oficina y software especializado bajo demanda.',
      icono: '💾',
      detalles: ['Windows/Linux', 'Office / Adobe', 'Eliminación de virus']
    }
  ];
}
