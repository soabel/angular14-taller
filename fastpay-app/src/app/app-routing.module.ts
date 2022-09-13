import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './home/core/core.component';
import { HomeComponent } from './home/home/home.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: CoreComponent, canActivate: [AuthGuard],
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'contacts',  canActivate: [AuthGuard],
    component: CoreComponent, loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule)
  },
  {
    path: 'profile',
    component: CoreComponent,canActivate: [AuthGuard], loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'moves',
    component: CoreComponent,canActivate: [AuthGuard], loadChildren: () => import('./moves/moves.module').then(m => m.MovesModule)
  },
  {
    path: 'payments',
    component: CoreComponent,canActivate: [AuthGuard], loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
