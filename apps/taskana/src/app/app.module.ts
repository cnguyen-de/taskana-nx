import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WorkbasketListModule } from '@taskana/workbasket/feature/workbasket-list';
import { WorkbasketDetailsModule } from '@taskana/workbasket/feature/workbasket-details';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { WorkbasketState } from '@taskana/workbasket/data-access';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    WorkbasketListModule,
    WorkbasketDetailsModule,
    NgxsModule.forRoot([WorkbasketState]),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
