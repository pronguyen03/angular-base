import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { onMainContentChange } from './animations/animations';
import { User } from './shared/models/user';
import { AuthenticationService } from './shared/services/authentication.service';
import { SidenavService } from './shared/services/sidenav.service';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [onMainContentChange],
})
export class AppComponent {
  public onSideNavChange: boolean;
  currentUser: User;

  constructor(
    private sidenavService: SidenavService,
    private authenticationService: AuthenticationService) {
    this.sidenavService.sideNavState$.subscribe((res) => {
      this.onSideNavChange = res;
    });
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

}
