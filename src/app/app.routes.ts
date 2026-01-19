import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { Nosotros } from './components/nosotros/nosotros';
import { Proyectos } from './components/proyectos/proyectos';
import { Reparacion } from './components/reparacion/reparacion';
import { Camaras } from './components/camaras/camaras';
import { Programas } from './components/programas/programas';

export const routes: Routes = [
    { path: '', component: Inicio },
    { path: 'nosotros', component: Nosotros },
    { path: 'proyectos', component: Proyectos },
    { path: 'reparacion', component: Reparacion },
    { path: 'camaras', component: Camaras },
    { path: 'programas', component: Programas },
    { path: '**', redirectTo: '' }


];
