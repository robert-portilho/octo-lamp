import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    { 
        path: '', redirectTo: '/dashboard', pathMatch: 'full'
    }
];
