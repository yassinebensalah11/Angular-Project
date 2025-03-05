import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceDetailsComponent } from './residences/residence-details/residence-details.component';
import { AddAppartementComponent   } from './appartement/add-appartement/add-appartement.component';
import { AddResidenceComponent } from './residences/add-residence/add-residence.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'residence',component:ResidencesComponent},
  {path:'home',component:HomeComponent},
  {path:'details/:id',component:ResidenceDetailsComponent},
  {path:'addAppart',component:AddAppartementComponent},
  { path: "addRes", component: AddResidenceComponent },
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
