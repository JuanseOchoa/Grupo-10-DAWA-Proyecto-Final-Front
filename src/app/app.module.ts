import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { FormClienteComponent } from './components/_cliente/form-cliente/form-cliente.component';
import { ListarClienteComponent } from './components/_cliente/listar-cliente/listar-cliente.component';
import { MantenimientoClienteComponent } from './components/_cliente/mantenimiento-cliente/mantenimiento-cliente.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';
import { CrudComponent } from './components/crud/crud.component';
import { TreeComponent } from './components/tree/tree.component';
import { FormProveedorComponent } from './components/_proveedor/form-proveedor/form-proveedor.component';
import { ListarProveedorComponent } from './components/_proveedor/listar-proveedor/listar-proveedor.component';
import { MantenimientoProveedorComponent } from './components/_proveedor/mantenimiento-proveedor/mantenimiento-proveedor.component';
import { FormCategoriaComponent } from './components/_categoria/form-categoria/form-categoria.component';
import { ListarCategoriaComponent } from './components/_categoria/listar-categoria/listar-categoria.component';
import { MantenimientoCategoriaComponent } from './components/_categoria/mantenimiento-categoria/mantenimiento-categoria.component';
import { FormProductoComponent } from './components/_producto/form-producto/form-producto.component';
import { ListarProductoComponent } from './components/_producto/listar-producto/listar-producto.component';
import { MantenimientoProductoComponent } from './components/_producto/mantenimiento-producto/mantenimiento-producto.component';
import { FacturaComponent } from './components/factura/factura.component';
import { InventarioComponent } from './components/inventario/inventario.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SingInComponent,
    FormClienteComponent,
    ListarClienteComponent,
    LayoutComponent,
    MantenimientoComponent,
    MantenimientoClienteComponent,
    CrudComponent,
    TreeComponent,
    FormProveedorComponent,
    ListarProveedorComponent,
    MantenimientoProveedorComponent,
    FormCategoriaComponent,
    ListarCategoriaComponent,
    MantenimientoCategoriaComponent,
    FormProductoComponent,
    ListarProductoComponent,
    MantenimientoProductoComponent,
    FacturaComponent,
    InventarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
