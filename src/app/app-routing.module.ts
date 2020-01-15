import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoFirstComponent } from './demo-first/demo-first.component';
import { ErrCompComponent } from './err-comp/err-comp.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'demo-first',
    component: DemoFirstComponent
  },
  {
    path: '**',
    component: ErrCompComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
