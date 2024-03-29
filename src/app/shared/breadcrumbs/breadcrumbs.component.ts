import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import {Subscription} from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {
  public pageTitle: string = '';
  public subsTitle$: Subscription;

  constructor( private router: Router ) { 
    this.subsTitle$ = this.getDataRoute()
                        .subscribe( ({ title }) => {
                          this.pageTitle = title;
                          document.title = `AdminPro - ${ title }`;
                        });
  }

  ngOnDestroy(): void {
    this.subsTitle$.unsubscribe();
  }

  getDataRoute() {
    return this.router.events
    .pipe(
      filter( ( event: any ) => event instanceof ActivationEnd ),
      filter( ( event: ActivationEnd ) => event.snapshot.firstChild === null ),
      map( ( event: ActivationEnd ) => event.snapshot.data ),
    );
  }

}
