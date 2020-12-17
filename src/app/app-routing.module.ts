import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  {
    // route http://localhost:4200/ for HomeComponent
    path: '',
    component: HomeComponent,
  },
  {
    // route http://localhost:4200/operation for OperationComponents
    path: 'operation',
    loadChildren: () => import('./modules/product/operation.module').then(m => m.OperationModule),
  },
  {
    // route http://localhost:4200/unknown for NotFoundComponent
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
