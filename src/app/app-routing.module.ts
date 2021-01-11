import {NgModule} from '@angular/core';
import {PreloadAllModules, PreloadingStrategy, RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';

const route: Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  // {path: 'about', loadChildren: './about-page/about-page.module#AboutPageModule'}
  {path: 'about', loadChildren: () => import('./about-page/about-page.module').then(module => module.AboutPageModule)}
];


@NgModule({
  imports: [RouterModule.forRoot(route, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
