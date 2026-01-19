import { Component, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';
import { filter } from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Footer,Navbar,],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('ipconfig');
  constructor(private router: Router) {}

  ngOnInit() {
    // Escucha cada vez que termina una navegación
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0); // Sube la pantalla al inicio
    });
  }
}
