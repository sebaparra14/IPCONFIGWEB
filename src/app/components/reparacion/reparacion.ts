import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-reparacion',
  standalone: true, // Esto activa el modo Standalone
  imports: [CommonModule, FormsModule],
  templateUrl: './reparacion.html',
  styleUrl: './reparacion.scss',
})
export class Reparacion {
  @ViewChild('slider') slider!: ElementRef;
  currentSlide = 0;

  // Detecta el movimiento del scroll para actualizar los segmentos
  onScroll(event: any) {
    const scrollLeft = event.target.scrollLeft;
    const width = event.target.clientWidth;
    this.currentSlide = Math.round(scrollLeft / width);
  }

  // Navegación manual por botones
  move(direction: number) {
    const container = this.slider.nativeElement;
    const scrollAmount = container.clientWidth;
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }
}