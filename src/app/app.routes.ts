import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Header } from './core/shared/header/header';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: Home},
];
