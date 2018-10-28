import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupportListComponent } from './support-list/support-list.component';
import { ChatComponent } from './chat/chat.component';


const routes: Routes = [
  {path: '',  component:SupportListComponent},
  {path: 'chat',  component:ChatComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule { }
