import { PeerComponent } from './peer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeerListComponent } from './peer-list/peer-list.component';


const routes: Routes = [
  {
    path: '', component: PeerComponent, children: [
      { path: 'list', component: PeerListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeerRoutingModule { }
