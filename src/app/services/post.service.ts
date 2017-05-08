import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map"

import { Post } from '../entities/post';
import { Categories } from '../entities/categories';
import { User } from '../entities/user';

@Injectable()
export class PostService{
    constructor(private _http: Http){}

    getPosts(): Observable<Post[]> {
        return this._http
            .get(`https://jsonplaceholder.typicode.com/posts`)
            .map((respuesta: Response)=>{
                let post: Post[] = [
                    {
                        post_id: 1,
                        title: "Post Pruebas",
                        intro: "Este es un post de pruebas",
                        content :"Este es el contenido del post",
                        url_media: "",
                        categories: [new Categories(0,"Deportes",""), new Categories(0,"Música","")],
                        publicate_at: new Date(),
                        state: "1",
                        type: "1",
                        author: new User(11,"user1","Usuario","usu@correo.com"),
                        likes: 2
                    },
                    {
                        post_id: 1,
                        title: "Post Pruebas 2",
                        intro: "otro de pruebas este es un post de pruebas",
                        content :"pruebas este es el contenido del post",
                        url_media: "",
                        categories: [new Categories(0,"Cine",""), new Categories(0,"Arte","")],
                        publicate_at: new Date(),
                        state: "1",
                        type: "1",
                        author: new User(11,"pepito","Pepe","pepe@correo.com"),
                        likes: 2
                    },
                    {
                        post_id: 1,
                        title: "Otro Post",
                        intro: "Toca ponerle Lorem Ipsum",
                        content :"Este es el tercer post para probar que todo funcione bien",
                        url_media: "",
                        categories: [new Categories(0,"Deportes",""), new Categories(0,"Cine","")],
                        publicate_at: new Date(),
                        state: "1",
                        type: "1",
                        author: new User(11,"carlos","Carlos José","carlos@correo.com"),
                        likes: 2
                    }
                ];

                return post;
            });
    }
}