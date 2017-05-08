import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { PostListComponent }  from './postList/post-list';
import { PostService }  from './services/post.service';
import { AppRoutingModule } from './app-routing.module';
import { PostResolve } from './services/post-resolve.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent ,
    PostListComponent
  ],
  providers:[
    PostService,
    PostResolve
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
