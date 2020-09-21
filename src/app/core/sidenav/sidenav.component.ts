import { Component, OnInit } from '@angular/core';
import { animateText, onSideNavChange } from 'src/app/animations/animations';
import { SidenavService } from 'src/app/shared/services/sidenav.service';

interface NavItem {
  link: string;
  name: string;
  icon: string;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [onSideNavChange, animateText],
})
export class SidenavComponent implements OnInit {
  public sideNavState = false;
  public linkText = false;
  public pages: NavItem[] = [
    { name: 'Inbox', link: 'some-link', icon: 'inbox' },
    { name: 'Starred', link: 'some-link', icon: 'star' },
    { name: 'Send email', link: 'some-link', icon: 'send' },
  ];

  constructor(private sidenavService: SidenavService) {
    this.sidenavService.sideNavState$.subscribe((res) => {
      this.sideNavState = res;
      setTimeout(() => {
        this.linkText = this.sideNavState;
      }, 200);
    });
  }

  ngOnInit(): void {}

  onSinenavToggle(): void {
    this.sideNavState = !this.sideNavState;

    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200);
    this.sidenavService.sideNavState$.next(this.sideNavState);
  }
}
