import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './ts/app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './ts/home';
import { CurtainComponent } from './ts/curtain';
import { MovingElementDirective } from './ts/moving-element.directive';

@NgModule({
    imports: [BrowserModule, FlexLayoutModule.forRoot(), AppRoutingModule],
    declarations: [AppComponent, HomeComponent, CurtainComponent, MovingElementDirective],
    bootstrap: [AppComponent]
})
export class AppModule { }
