import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { fromEvent, merge, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './using-observables.component.html',
})
export class UsingObservablesComponent implements OnInit {
  // 1
  @ViewChild('btn', {read: ElementRef, static: true}) btn;
  @ViewChild('text', {read: ElementRef, static: true}) text;
  message: string;
  // 2
  @ViewChild('btn2', {read: ElementRef, static: true}) btn2;
  @ViewChild('text2', {read: ElementRef, static: true}) text2;
  message2: string;
  // 3
  time: string;
  timer2$;

  ngOnInit() {
      // two observables, two subscribe
      const btnOb$ = fromEvent(this.btn.nativeElement, 'click');
      btnOb$.subscribe( res => this.message = 'Hello Angular, RxJS!');

      const textOb$ = fromEvent(this.text.nativeElement, 'change').pipe(
          map((event: Event) => ( event.target as HTMLInputElement).value)
      );
      textOb$.subscribe(res => this.message = res);

      // two observable, one subscribe using merge
      const btnOb2$ = fromEvent(this.btn2.nativeElement, 'click').pipe(
          map(event => 'This is my message!')
      );

      const textOb2$ = fromEvent(this.text2.nativeElement, 'change').pipe(
          map((event: Event) => ( event.target as HTMLInputElement).value)
      );

      merge(btnOb2$, textOb2$).subscribe(res => this.message2 = res);

      const timer$ = interval(1000).pipe(
        map(event => new Date())
      );
      timer$.subscribe(val => this.time = val.toString());
  
      // use directly in the view
      this.timer2$ = interval(1000).pipe(
        map(event => new Date())
      );
  }

}
