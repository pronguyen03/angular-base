import { Component } from '@angular/core';
import { onMainContentChange } from './animations/animations';
import { SidenavService } from './shared/services/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [onMainContentChange],
})
export class AppComponent {
  public onSideNavChange: boolean;
  constructor(private sidenavService: SidenavService) {
    this.sidenavService.sideNavState$.subscribe((res) => {
      this.onSideNavChange = res;
    });
  }
}
