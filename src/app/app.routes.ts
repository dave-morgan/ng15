import { Routes } from "@angular/router";

export const AppRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    { path: 'login', loadChildren: () => import('login/login.routes') }
];