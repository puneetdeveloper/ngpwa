import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutUsComponent},
  { path: 'Contactus', component: ContactusComponent},
  { path: '',  component:HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
