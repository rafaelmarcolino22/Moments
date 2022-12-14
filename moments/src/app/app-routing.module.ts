import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewMomentsComponent } from './components/pages/new-moments/new-moments.component';
import { MomentsComponent } from './components/pages/moments/moments.component';
import { EditComponent } from './components/pages/edit/edit.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "moments/new-moments", component: NewMomentsComponent},
  {path: "moments/:id", component: MomentsComponent},
  {path: "moments/edit/:id", component: EditComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
