import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AboutMe } from './about-me/about-me';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: Home},
    {path: 'AboutMe', component: AboutMe}
];
