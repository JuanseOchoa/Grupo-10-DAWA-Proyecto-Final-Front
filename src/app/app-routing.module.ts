import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormClienteComponent } from './components/_cliente/form-cliente/form-cliente.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';
import { FacturaComponent } from './components/factura/factura.component';
import { InventarioComponent } from './components/inventario/inventario.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'mantenimiento', component: MantenimientoComponent },
  { path: 'factura', component: FacturaComponent },
  { path: 'inventario', component: InventarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}