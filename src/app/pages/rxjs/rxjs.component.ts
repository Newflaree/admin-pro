import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent {

  constructor() { 
    this.returnObs().pipe(
      retry( 1 )
    ).subscribe( 
      value => console.log( 'Subs:', value ),
      err => console.warn( 'Error:', err ),
      () => console.info( 'Obs ended' )
    )
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
