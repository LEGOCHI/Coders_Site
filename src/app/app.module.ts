import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { SectionComponent } from './section/section.component';
import { ValuesSectionComponent } from './values-section/values-section.component';
import { FeaturesSectionComponent } from './features-section/features-section.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { TeamComponent } from './team/team.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    SectionComponent,
    ValuesSectionComponent,
    FeaturesSectionComponent,
    PortafolioComponent,
    TeamComponent,
    ClientesComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
