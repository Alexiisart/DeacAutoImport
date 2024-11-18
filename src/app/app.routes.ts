import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { ContactosComponent } from './pages/contactos/contactos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'contacto', component: ContactosComponent },
  { path: '**', redirectTo: '' },
];
