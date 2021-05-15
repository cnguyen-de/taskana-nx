import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration/administration.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AdministrationComponent],
  exports: [AdministrationComponent]
})
export class AdministrationModule {}
