import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../ui/home.component';
import { MapComponent } from '../map/map.component';
import { MapAdminComponent } from '../map/map-admin.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'map/:id', component: MapComponent },
  { path: 'mapadmin', component: MapAdminComponent }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
})
export class RoutingModule { }
export const routingComponents = [HomeComponent, MapComponent, MapAdminComponent];
