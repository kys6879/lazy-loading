import { FabricComponent } from './fabric.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: FabricComponent, children: [
      {
        path: 'peer', loadChildren: () => import('./peer/peer.module').then(m => m.PeerModule)
      },
      {
        path: 'orderer', loadChildren: () => import('./orderer/orderer.module').then(m => m.OrdererModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FabricRoutingModule { }
