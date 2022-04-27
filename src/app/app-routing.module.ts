import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListVentasComponent} from "./components/list-ventas/list-ventas.component";
import {CreateVentaComponent} from "./components/create-venta/create-venta.component";

const routes: Routes = [
  { path: '', redirectTo: 'list-ventas', pathMatch: 'full' },
  { path: 'list-ventas', component: ListVentasComponent },
  { path: 'create-venta', component: CreateVentaComponent },
  { path: '**', redirectTo: 'list-ventas', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
