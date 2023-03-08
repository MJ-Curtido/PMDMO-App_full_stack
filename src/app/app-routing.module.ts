import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IniciadoGuardGuard } from './guards/iniciado-guard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule),
    canActivate: [IniciadoGuardGuard]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'miscursos',
    loadChildren: () => import('./pages/miscursos/miscursos.module').then( m => m.MiscursosPageModule),
    canActivate: [IniciadoGuardGuard]
  },
  {
    path: 'comprados',
    loadChildren: () => import('./pages/comprados/comprados.module').then( m => m.CompradosPageModule),
    canActivate: [IniciadoGuardGuard]
  },
  {
    path: 'menu-tab',
    loadChildren: () => import('./pages/menu-tab/menu-tab.module').then( m => m.MenuTabPageModule),
    canActivate: [IniciadoGuardGuard]
  },
  {
    path: 'mesa-cursos',
    loadChildren: () => import('./pages/mesa-cursos/mesa-cursos.module').then( m => m.MesaCursosPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
