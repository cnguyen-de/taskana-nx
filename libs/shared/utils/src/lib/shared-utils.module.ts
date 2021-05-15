import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevEnvInterceptor } from './dev-env.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DevEnvInterceptor,
      multi: true
    }
  ],
  exports: []
})
export class SharedUtilsModule {}
