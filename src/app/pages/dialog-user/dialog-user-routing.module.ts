import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogUserComponent } from '@pages/dialog-user/components/dialog-user/dialog-user.component';

const routes: Routes = [
  {
    path: '',
    component: DialogUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DialogUserRoutingModule {}
