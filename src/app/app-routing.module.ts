import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router"
import { PostListComponent }  from './components/postList/post-list';
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