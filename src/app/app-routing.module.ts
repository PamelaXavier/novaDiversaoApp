import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'ad-astra',
    loadChildren: () => import('./filmes/ad-astra/ad-astra.module').then( m => m.AdAstraPageModule)
  },
  {
    path: 'scooby',
    loadChildren: () => import('./filmes/scooby/scooby.module').then( m => m.ScoobyPageModule)
  },
  {
    path: 'blood-and-money',
    loadChildren: () => import('./filmes/blood-and-money/blood-and-money.module').then( m => m.BloodAndMoneyPageModule)
  },
  {
    path: 'a-ilha-da-fantasia',
    loadChildren: () => import('./filmes/a-ilha-da-fantasia/a-ilha-da-fantasia.module').then( m => m.AIlhaDaFantasiaPageModule)
  },
  {
    path: 'a-cacada',
    loadChildren: () => import('./filmes/a-cacada/a-cacada.module').then( m => m.ACacadaPageModule)
  },
  {
    path: 'broil',
    loadChildren: () => import('./filmes/broil/broil.module').then( m => m.BroilPageModule)
  },
  {
    path: 'dilwale-dulhania',
    loadChildren: () => import('./filmes/dilwale-dulhania/dilwale-dulhania.module').then( m => m.DilwaleDulhaniaPageModule)
  },
  {
    path: 'um-sonho-de-liberdade',
    loadChildren: () => import('./filmes/um-sonho-de-liberdade/um-sonho-de-liberdade.module').then( m => m.UmSonhoDeLiberdadePageModule)
  },
  {
    path: 'lei-ordem',
    loadChildren: () => import('./series/lei-ordem/lei-ordem.module').then( m => m.LeiOrdemPageModule)
  },
  {
    path: 'doctor-who',
    loadChildren: () => import('./series/doctor-who/doctor-who.module').then( m => m.DoctorWhoPageModule)
  },
  {
    path: 'sherlock',
    loadChildren: () => import('./series/sherlock/sherlock.module').then( m => m.SherlockPageModule)
  },
  {
    path: 'mad-man',
    loadChildren: () => import('./series/mad-man/mad-man.module').then( m => m.MadManPageModule)
  },
  {
    path: 'ursinhos-carinhosos',
    loadChildren: () => import('./desenhos/ursinhos-carinhosos/ursinhos-carinhosos.module').then( m => m.UrsinhosCarinhososPageModule)
  },
  {
    path: 'gravity-falls',
    loadChildren: () => import('./desenhos/gravity-falls/gravity-falls.module').then( m => m.GravityFallsPageModule)
  },
  {
    path: 'irmao-jorel',
    loadChildren: () => import('./desenhos/irmao-jorel/irmao-jorel.module').then( m => m.IrmaoJorelPageModule)
  },
  {
    path: 'simpsons',
    loadChildren: () => import('./desenhos/simpsons/simpsons.module').then( m => m.SimpsonsPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
