import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const promise = new Promise( ( reject, resolve ) => {
      if ( true ) {
        resolve( 'Hello World' );
      } else {
        reject( 'Something went wrong' );
      }
    });

    promise.then( ( msg ) => {
      console.log( msg );
    }).catch( err => console.log( 'Promise failed', err ) );

    console.log( 'End of init' );
  }
}
