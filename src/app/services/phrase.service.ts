import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore"
import { Observable } from 'rxjs';
import { UserPhrase } from '../common/phrase';

@Injectable({
  providedIn: 'root'
})
export class PhraseService {
  phraseCollection: AngularFirestoreCollection<UserPhrase> | undefined;
  phrase$: Observable<UserPhrase[]> | undefined ;


  constructor(private firestore: AngularFirestore) {
    this.phraseCollection = this.firestore.collection('userPhrases');
    // this.phrase$ = this.phraseCollection.valueChanges();
   }

  addPhrase(phrase: UserPhrase) {   
    this.phraseCollection?.add(phrase);
  }
}
