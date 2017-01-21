import { Component, OnInit, trigger, transition, animate, style, state, AnimationTransitionEvent } from '@angular/core';
import { Router } from '@angular/router';
var slideTime = 1500;
@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: '../html/app.component.html',
    styleUrls: ['../scss/app.component.css'],
    animations: [
        trigger('topLeft', [
            state('in', style({ transform: 'translateX(0)' })),

            transition('* => void', [
                animate('1.5s', style({ transform: 'translate(-100%,-100%)' }))
            ])
        ]),
        trigger('topRight', [
            state('in', style({ transform: 'translateX(0)' })),

            transition('* => void', [
                animate('1.5s', style({ transform: 'translate(100%,-100%)' }))
            ])
        ]),
        trigger('bottomRight', [
            state('in', style({ transform: 'translateX(0)' })),

            transition('* => void', [
                animate('1.5s', style({ transform: 'translate(100%,100%)' }))
            ])
        ]),
        trigger('bottomLeft', [
            state('in', style({ transform: 'translateX(0)' })),

            transition('* => void', [
                animate('1.5s', style({ transform: 'translate(-100%,100%)' }))
            ])
        ]),
        trigger('container', [
            state('in', style({ transform: 'translateX(0)' })),

            transition('* => void', [
                animate('0s 2s', style({ transform: 'translate(-100%,100%)' }))
            ])
        ]),

    ]

})
export class AppComponent implements OnInit {
    name = 'Angular';
    visible: boolean = true;

    constructor(private router: Router) { }
    ngOnInit() {
        console.log('window.innerHeight ' + window.innerHeight)
        console.log('window.outerHeight ' + window.outerHeight)
        console.log('screen.height ' + screen.height)
        setTimeout(() => { this.visible = false }, 4000);
    }

    animationDone($event: AnimationTransitionEvent) {
        if ($event.toState == "void") {
            document.getElementById('container').style.display = 'none';
        }
    }

}
