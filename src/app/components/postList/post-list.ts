import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Post } from '../../entities/post';

@Component({
  selector: 'post-list',
  templateUrl:'./post-list.component.html',
  styleUrls: ["./post-list.component.css"]
})

export class PostListComponent implements OnInit {

    posts: Post[];

    constructor(private _activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this._activatedRoute.data.forEach((data: { posts: Post[] }) => this.posts = data.posts);
        window.scrollTo(0, 0);
    }
}