import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// External Components 
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
// import { getFirestore, provideFirestore } from '@angular/fire/firestore';


// App Components
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PhraseComponent } from './writeup/phrase/phrase.component';

import { environment } from 'src/environments/environment';
import { PhraseService } from './services/phrase.service';
import { SuccessfulComponent } from './successful/successful.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PhraseComponent,
    SuccessfulComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
    // provideFirebaseApp(() => initializeApp(environment.firebase, 'connectStore')),
    // provideFirestore(() => getFirestore())
            
  ],
  providers: [PhraseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
