import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AboutMe } from './about-me/about-me';
import { Portfolio } from './portfolio/portfolio';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: Home},
    {path: 'AboutMe', component: AboutMe},
    {path: 'Projects', component: Portfolio}
];
