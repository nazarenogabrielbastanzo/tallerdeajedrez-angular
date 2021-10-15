import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  {
    path: 'pages',
    loadChildren: () => import('./components/pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'articles',
    loadChildren: () => import('./components/articles/articles.module').then(m => m.ArticlesModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
