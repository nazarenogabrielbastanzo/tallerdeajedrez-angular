import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'InicioPage' } },
  {
    path: 'pages',
    loadChildren: () =>
      import('./components/pages/pages.module').then((m) => m.PagesModule),
      data: {animation: 'PagesModule'}
  },
  {
    path: 'articles',
    loadChildren: () =>
      import('./components/articles/articles.module').then(
        (m) => m.ArticlesModule
      ),
      data: {animation: 'ArticlesModule'}
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // On navigation, restores the scroll position to top.
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
