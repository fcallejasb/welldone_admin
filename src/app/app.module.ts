import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";

import { AppComponent }  from './app.component';
import { PostListComponent }  from './components/postList/post-list';

import { PostService }  from './services/post.service';
import { LoginService }  from './services/login.service';
import { BackendUriProvider} from "./services/settings.service";
import { UserDataService} from "./services/userdata.service";
import { HttpHeaderService } from './services/httpheader.service';

import { AppRoutingModule } from './app-routing.module';
import { PostResolve } from './services/post-resolve.service';
import { HeaderMenuComponent }  from './components/headerMenu/header-menu';
import { PostFormComponent }  from './components/postForm/post-form';
import { LoginComponent }  from './components/login/login';
import { CreateUserComponent }  from './components/createUser/create-user';

//import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [ 
    AppComponent ,
    PostListComponent,
    HeaderMenuComponent,
    PostFormComponent,
    LoginComponent,
    CreateUserComponent
  ],
  providers:[
    BackendUriProvider,
    PostService,
    PostResolve,
    LoginService,
    UserDataService,
    HttpHeaderService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
