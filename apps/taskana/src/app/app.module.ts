import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { WorkbasketState } from '@taskana/workbasket/data-access';
import { HttpClientModule } from '@angular/common/http';
import { SharedUtilsModule } from '@taskana/shared/utils';
import { RoutesModule } from '@taskana/shared/components/shell/routes';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    NgxsModule.forRoot([WorkbasketState], { developmentMode: !environment.production }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    SharedUtilsModule,
    RoutesModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
