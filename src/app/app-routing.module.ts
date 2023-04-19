import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./modules').then((m) => m.HomeModule),
  },
  { path: 'home', redirectTo: '' },
  {
    path: 'gallery',
    loadChildren: () => import('./modules').then((m) => m.GalleryModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules').then((m) => m.DashboardModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
