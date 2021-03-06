import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { HttpModule } from '@angular/http';
import { WebSocketComponent } from './web-socket/web-socket.component';
import { WebSocketService } from './shared/web-socket.service'

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    WebSocketComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
