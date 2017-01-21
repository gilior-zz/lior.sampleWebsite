import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({ selector: '[moving-element]' })

export class MovingElementDirective implements OnInit {
    constructor(private elementRef: ElementRef) {
    }

    @HostListener('mouseenter') onMouseEnter() {
        console.log('mouseenter');
        this.timer = null;
    }
    @HostListener('mouseleave') onMouseLeave() {
        console.log('mouseleave');
        this.moveIt();
    }

    moveIt() {
        this.timer = setInterval(() => {

            let nativeWidth = this.nativeElement.offsetWidth;
            let maxNativeWidth = nativeWidth / 2;

            let nativeHeight = this.nativeElement.offsetHeight;
            let maxNativeHeight = nativeHeight / 2;

            let parentWidth = this.parentElement.offsetWidth;
            let parentHeight = this.parentElement.offsetHeight;

            let maxStepWidth = parentWidth / 2 - maxNativeWidth;
            let maxStepHeight = parentHeight / 2 - maxNativeHeight;
            this.offsetLeft++;
            this.offsetTop++;
            if (this.offsetLeft > maxStepWidth) this.offsetLeft = 0;
            if (this.offsetTop > maxStepHeight) this.offsetTop = 0;
            this.nativeElement.style.top = `-${this.offsetTop}px`;
            this.nativeElement.style.left = `${this.offsetLeft}px`;
        }, 10)
    }

    offsetLeft: number;
    offsetTop: number;
    //nativeWidth: number;
    //nativeHeight: number;
    //parentWidth: number;
    //parentHeight: number;
    //maxNativeWidth: number;
    //maxNativeHeight: number;
    //maxStepWidth: number;
    //maxStepHeight: number;
    nativeElement: HTMLDivElement;
    parentElement: HTMLDivElement;

    timer: NodeJS.Timer;
    ngOnInit() {
        this.nativeElement = <HTMLDivElement>this.elementRef.nativeElement;
        this.parentElement = <HTMLDivElement>this.nativeElement.parentElement;
        this.offsetLeft = 0;
        this.offsetTop = 0;
        this.moveIt();

    }
}

