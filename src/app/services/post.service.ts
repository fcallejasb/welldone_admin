import { Inject, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map"

import { BackendUri } from "./settings.service";
import { Post } from '../entities/post';
import { Categories } from '../entities/categories';
import { User } from '../entities/user';
import { HttpHeaderService } from '../services/httpheader.service';

@Injectable()
export class PostService{
    constructor(
        private _http: Http,
        private _httpDataService: HttpHeaderService,
        @Inject(BackendUri) private _backendUri: any){}

    getPosts(): Observable<Post[]> {
        return this._http
            .get(`${this._backendUri}:9002/api/1.0/posts`)
            .map((respuesta: Response)=>{
                let resp = respuesta.json();
                let postList: Post[] = [];

                for(let obj in resp){
                    let p: Post = Post.fromJson(resp[obj]);
                    postList.push(p);
                }
                
                return postList;
            });
    }

    createPost(post: Post): Observable<Post> {
        return this._http
            .post(`${this._backendUri}:8000/new-post`, post, this._httpDataService.optHeaders)
            .map((respuesta: Response)=>{
                let resp = respuesta.json();
                let postN: Post = Post.fromJson(resp);
                return postN;
            });
    }
}