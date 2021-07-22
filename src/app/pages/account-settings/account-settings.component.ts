import { Component, OnInit } from '@angular/core';

// Services
import { SettigsService } from 'src/app/services/settigs.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {
  constructor(
    private settingsService: SettigsService
  ) { }

  ngOnInit(): void {
    this.settingsService.checkCurrentTheme();
  }
 
  changeTheme( theme: string ) {
    this.settingsService.changeTheme( theme );
  }
}
