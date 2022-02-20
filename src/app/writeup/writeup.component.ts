import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Subscription } from "rxjs";
import { PhraseService } from "../services/phrase.service";


@Component ({
    selector: 'writeup',
    templateUrl: './writeup.component.html',
    styleUrls: ['./writeup.component.css'],
    encapsulation: ViewEncapsulation.None
})

export  class WriteupComponent implements OnInit, OnDestroy {
    Autoconnect:boolean | undefined 
    Manualconnect: boolean | undefined 
    inputvalue : any
    subscription!: Subscription;


    constructor(private modalService : NgbModal, private router: Router, private phraseService: PhraseService) {}

    ngOnInit(): void {
        this.subscription = this.phraseService.currentMessage.subscribe(message => this.inputvalue = message)
        this.Autoconnect = false;
        this.Manualconnect = true
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    openVerticallyCentered(content: any) {
        this.modalService.open(content, { centered: true });
        this.inputvalue = document.querySelector('#stock')?.getAttribute("data-value");
        console.log(this.inputvalue)
        setTimeout(() => {
            this.Autoconnect = true;
            this.Manualconnect = false;
        }, 5000)
        this.phraseService.changeMessage(this.inputvalue)
      }

    connect() {
        this.router.navigate(['/connect'])
        window.scrollTo(0,0)
    }    
}
