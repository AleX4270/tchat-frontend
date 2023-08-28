import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestGuard } from '../shared/guards/guest.guard';

import { StartPageComponent } from './start-page/start-page.component';

const routes: Routes = [
    { 
        path: '', 
        component: StartPageComponent,
        canActivate: [GuestGuard]
    },
    { 
        path: 'create-password/:token', 
        component: StartPageComponent,
        canActivate: [GuestGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}