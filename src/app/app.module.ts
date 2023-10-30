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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
    ImgMagnifier,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    PieceService
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
