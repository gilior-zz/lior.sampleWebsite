import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { HomeComponent } from './ts/home'
import { CurtainComponent } from './ts/curtain'

const appRoutes: Routes = [{ path: 'home', component: HomeComponent },
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'curtain', component: CurtainComponent },
]

@NgModule({ imports: [RouterModule.forRoot(appRoutes, { useHash: true })], exports: [RouterModule] })

export class AppRoutingModule { }