import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, Resolve } from "@angular/router"
import { Observable } from "rxjs/Observable"

import { Post } from '../entities/post';
import { PostService }  from '../services/post.service';

//Crear el servicio para resolver los datos previos al routing de un componente
@Injectable()
export class PostResolve implements Resolve<Post[]>{

    constructor(private _postService: PostService){}

    resolve(route: ActivatedRouteSnapshot): Observable<Post[]>{
        return this._postService.getPosts();
    }
}