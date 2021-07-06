import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-increasing',
  templateUrl: './increasing.component.html',
  styles: [
  ]
})
export class IncreasingComponent {
  //@Input( 'value' ) progress: number = 40;  
  @Input( 'value' ) progress: number = 40;  
  @Input() btnClass: string = 'btn btn-primary'

  @Output( 'value' ) outputValue: EventEmitter<number> = new EventEmitter();
  
  changeValue( value: number ) {
    if ( this.progress >= 100 && value >= 0 ) {
      this.outputValue.emit(100);
      return this.progress = 100;
    }

    if ( this.progress <= 0 && value < 0 ) {
      this.outputValue.emit(0);
      return this.progress = 0;
    }

    this.progress = this.progress + value;
    return this.outputValue.emit( this.progress );
  }
}