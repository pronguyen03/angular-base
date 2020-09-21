import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, SidenavComponent, FooterComponent],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent, SidenavComponent, FooterComponent],
})
export class CoreModule {}
