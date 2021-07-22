import { Component, OnInit } from '@angular/core';

// Services
import { SettigsService } from '../services/settigs.service';

// Global functions
declare function customInitFunctions(): any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  constructor(
    private settingsService: SettigsService
  ) { }

  ngOnInit(): void {
    customInitFunctions();
  }
}
