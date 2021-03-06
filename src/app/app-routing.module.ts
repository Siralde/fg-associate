import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule',
  },
  {
    path: 'contact',
    loadChildren: './pages/contact/contact.module#ContactPageModule',
  },
  {
    path: 'transmites',
    loadChildren: './pages/transmites/transmites.module#TransmitesPageModule',
  },
  { path: 'sapi', loadChildren: './pages/sapi/sapi.module#SapiPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
