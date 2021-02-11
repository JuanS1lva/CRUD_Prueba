import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component'
const routes: Routes = [
  {
    path: '',
    component: CrearComponent,
    pathMatch: 'full',
  },
  {
    path: 'lista',
    component: ListarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
