import { Component, OnInit, trigger, transition, animate, style, state, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
//import {slideInDownAnimation } from './animate'
var slideTime = 1500;
@Component({
    moduleId: module.id,
    templateUrl: '../html/curtain.html',
    styleUrls: ['../scss/curtain.css'],
    animations: [
        trigger('bottomRight', [
            state('in', style({ transform: 'translateX(0)' })),

            transition(':leave', [
                animate(slideTime, style({ transform: 'translate(100%,100%)' }))
            ])
        ]),
        trigger('topLeft', [
            state('in', style({ transform: 'translateX(0)' })),

            transition(':leave', [
                animate(slideTime, style({ transform: 'translate(-100%,-100%)' }))
            ])
        ]),
        trigger('topRight', [
            state('in', style({ transform: 'translateX(0)' })),

            transition(':leave', [
                animate(slideTime, style({ transform: 'translate(100%,-100%)' }))
            ])
        ]),
        trigger('bottomLeft', [
            state('in', style({ transform: 'translateX(0)' })),

            transition(':leave', [
                animate(slideTime, style({ transform: 'translate(-100%,100%)' }))
            ])
        ]),

    ]

})
export class CurtainComponent implements OnInit {


    name = 'Angular';
    visible: boolean = true;

    constructor(private router: Router) { }
    ngOnInit() {
        console.log('window.innerHeight ' + window.innerHeight)
        console.log('window.outerHeight ' + window.outerHeight)
        console.log('screen.height ' + screen.height)
        setTimeout(() => {
            this.visible = false;
            setTimeout(() => { this.router.navigate(['home']) }, slideTime)

        }, 4000);
    }

}
