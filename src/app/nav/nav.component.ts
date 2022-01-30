import { Component } from "@angular/core";


@Component ({
    selector: 'nav-bar',
    templateUrl: './nav.component.html',
    styles: [`
        nav {
            margin: 0px auto;
            padding: 23px;
            margin-bottom: 20px;
            
        }
        .stock {
            width: 100%;
        }
        
        a > .text {
            font-family: "Open Sans", sans-serif;
    
        }

        footer {
            width: 100vw;
            padding: 7em 0;
          }
        .footer-07 {
            font-family: "Open Sans", sans-serif;
            background-color: #f6f9ff;
          }
          
        .footer-heading {
            margin-bottom: 30px;
          }
          
        h2 > a {
            font-family: "Alfa Slab One", cursive;
            font-size: 35px;
          }
          
        .footer-07 .menu a {
            color: rgba(14, 6, 6, 0.6);
            margin: 0 10px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          
        .menu {
            margin-bottom: 30px;
          }
          
        .footer-07 ul li {
            list-style: none;
            margin: 0 10px 0 0;
            display: inline-block;
            font-family: "Open Sans", sans-serif;
          }
          
        .list-unstyled li a {
            height: 40px;
            width: 40px;
            display: block;
            border-radius: 50%;
            position: relative;
          }
    `]
})

export  class NavComponent {
    isNavbarCollapsed=true;
}

// grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
// justify-content: center;
// display: grid;