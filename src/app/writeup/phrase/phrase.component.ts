import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { PhraseService } from "src/app/services/phrase.service";
import { Customer } from "./client.class";


@Component({
    templateUrl: './phrase.component.html',
    styleUrls: ['./phrase.component.css']
})

export class PhraseComponent implements OnInit {
    show1:boolean | undefined
    show2:boolean | undefined 
    client = new Customer();

    constructor(private phrase: PhraseService) {
    }

    ngOnInit(): void {
        this.show1 = true;
        this.show2 = false;
    }

    submitPhrase(phrases: NgForm) {
        console.log(phrases.form);
        console.log('saved: ' + JSON.stringify(phrases.value));
        this.phrase.addPhrase(phrases.value)
        phrases.reset()
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