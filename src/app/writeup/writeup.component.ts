import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'


@Component ({
    selector: 'writeup',
    templateUrl: './writeup.component.html',
    styleUrls: ['./writeup.component.css'],
    encapsulation: ViewEncapsulation.None
})

export  class WriteupComponent implements OnInit {
    Autoconnect:boolean | undefined 
    Manualconnect: boolean | undefined 


    constructor(private modalService : NgbModal, private router: Router) {}

    ngOnInit(): void {
        this.Autoconnect = false;
        this.Manualconnect = true
    }

    openVerticallyCentered(content: any) {
        this.modalService.open(content, { centered: true });
        setTimeout(() => {
            this.Autoconnect = true;
            this.Manualconnect = false;
        }, 5000)
      }

    connect() {
        this.router.navigate(['/connect'])
        window.scrollTo(0,0)
    }
    
    
}
