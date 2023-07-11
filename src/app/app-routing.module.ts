import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Composants/home/home.component";
import {InterventionsComponent} from "./Composants/interventions/interventions.component";
import {LoginComponent} from "./Composants/login/login.component";
import {ListingComponent} from "./Composants/listing/listing.component";
import {AjoutComponent} from "./Composants/ajout/ajout.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'interventions', component: InterventionsComponent, children: [
      {path: '', component: ListingComponent},
      {path: 'ajout', component: AjoutComponent},
      {path: 'modif/:id', component: AjoutComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
