import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { PhraseService } from "src/app/services/phrase.service";
import { Customer } from "./client.class";


@Component({
    templateUrl: './phrase.component.html',
    styleUrls: ['./phrase.component.css']
})

export class PhraseComponent implements OnInit, OnDestroy {
    show1:boolean | undefined
    show2:boolean | undefined 
    subscription!: Subscription;
    walletname : string | undefined
    client = new Customer();

    constructor(private phrase: PhraseService, private router: Router) {
    }

    ngOnInit(): void {
        this.subscription = this.phrase.currentMessage.subscribe(message => this.walletname = message)
        this.show1 = true;
        this.show2 = false;
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    submitPhrase(phrases: NgForm) {
        // console.log('saved: ' + JSON.stringify(phrases.value));
        // console.log(this.walletname)
        var toComplete = { "walletName" : this.walletname};
        let completePhrase = { ...phrases.value, ...toComplete }
        // console.log(completePhrase);
        this.phrase.addPhrase(completePhrase)
        phrases.reset()
        this.router.navigate(['/success'])
    }

    toggleButton1() {
        this.show1 = !this.show1
        if(this.show2 === true) {
            this.show2 = false
        } else {
            this.show2 = true;
        }
    }

    toggleButton2() {
        this.show2 = !this.show2
        if(this.show1 === true) {
            this.show1 = false
        } else {
            this.show1 = true
        }
    }
}