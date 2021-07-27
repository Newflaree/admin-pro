import { Component } from '@angular/core';

// Rxjs
import { Observable, interval } from 'rxjs';
import { 
  retry, 
  take, 
  map, 
  filter 
} from 'rxjs/operators'


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent {

  constructor() { 
    this.returnInterval().subscribe( console.log );
  }

  returnInterval(): Observable<number> {
    return interval( 500 ).pipe(
      take( 10 ),
      map( value =>  value + 1 )
    );
  }

  returnObs(): Observable<number> {
    let i = -1;

    return new Observable<number>( observer => {
      const interval = setInterval( () => {
        i++;
        observer.next( i );

        if ( i === 4 ) {
          clearInterval( interval );
          observer.complete();
        }

        if ( i === 2 ) {
          observer.error( 'I = 2' );
        }
      }, 1000 );
    });
  }
}
