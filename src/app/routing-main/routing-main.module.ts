import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { ContactDataService } from '../contact-data.service'
const routes: Routes = [
  {path:'',component:ContactComponent}
];
@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [ContactDataService],
  //declarations: []
  
  //imports: [ RouterModule.forRoot(routes) ]
})
export class RoutingMainModule { }
