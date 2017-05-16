import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router"
import { PostListComponent }  from './components/postList/post-list';
import { PostFormComponent }  from './components/postForm/post-form';
import { LoginComponent }  from './components/login/login';
import { CreateUserComponent }  from './components/createUser/create-user';
import { PostResolve } from "./services/post-resolve.service"

const rout: Routes = [
    {
        path:"post",
        component: PostListComponent,

        //Se indica lo que debe resolver antes de la navegación a la ruta
        resolve:{
            posts: PostResolve
        }
    },
    {
        path:"new-post",
        component: PostFormComponent,
    },
    {
        path:"login",
        component: LoginComponent,
    },
    {
        path:"register",
        component: CreateUserComponent,
    },
    {
        path:"**",
        redirectTo: "/post"
    }
];

const mRouting = RouterModule.forRoot(rout);

@NgModule({
    imports: [mRouting],
    exports:[RouterModule]
})
export class AppRoutingModule { }