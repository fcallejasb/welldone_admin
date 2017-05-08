import { Component,Input, Output, EventEmitter } from '@angular/core';

import { Post } from '../entities/post';

@Component({
  selector: 'post-list',
  templateUrl:'./post-list.component.html',
  styleUrls: ["./post-list.component.css"]
})

export class PostListComponent {

    @Input() posts: Post[];
    @Output() postSel: EventEmitter<Post> = new EventEmitter();

    notifyPostSel(post: Post):void{
        this.postSel.emit(post);
    }
}