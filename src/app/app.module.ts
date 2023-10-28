import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { GallaryComponent } from './gallary/gallary.component';
import { StillsComponent } from './stills/stills.component';
import { MotionComponent } from './motion/motion.component';
import { ContactComponent } from './contact/contact.component';
import { PieceComponent } from './piece/piece.component';

// Services
import { PieceService } from './services/piece.service';

// Packages
import { ImgMagnifier } from 'ng-img-magnifier';

const routes: Routes = [
  { path: '', component: GallaryComponent },
  { path: 'stills', component: StillsComponent },
  { path: 'motion', component: MotionComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'piece', component: PieceComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GallaryComponent,
    StillsComponent,
    MotionComponent,
    ContactComponent,
    PieceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ImgMagnifier
  ],
  providers: [
    PieceService
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
