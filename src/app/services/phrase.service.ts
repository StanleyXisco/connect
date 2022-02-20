import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore"
import { BehaviorSubject, Observable } from 'rxjs';
import { UserPhrase } from '../common/phrase';

@Injectable({
  providedIn: 'root'
})
export class PhraseService {
  phraseCollection: AngularFirestoreCollection<UserPhrase> | undefined;
  phrase$: Observable<UserPhrase[]> | undefined ;
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();


  constructor(private firestore: AngularFirestore) {
    this.phraseCollection = this.firestore.collection('userPhrases');
    // this.phrase$ = this.phraseCollection.valueChanges();
   }

  addPhrase(phrase: UserPhrase) {   
    this.phraseCollection?.add(phrase);
  }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
}
