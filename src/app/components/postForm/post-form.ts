import { Component, EventEmitter, OnInit, Output, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { FormGroup } from "@angular/forms";

import { Post } from '../../entities/post';
import { User } from '../../entities/user';

import { UserDataService } from '../../services/userdata.service';
import { PostService } from '../../services/post.service';

@Component({
    selector: "post-form",
    templateUrl: "./post-form.component.html",
    styleUrls: ["./post-form.component.css"]
})
export class PostFormComponent implements OnInit, OnDestroy {
    private _postSubscription: Subscription;
    public _msgPost: String;
    public _vMsg: boolean = false;

    public curUser : User;
    constructor(
        private _postService: PostService,
        private _userDataService: UserDataService,
        private _router: Router) { }

    nowDatetimeLocal: string;
    publicationDateScheduled: boolean = false;

    ngOnDestroy(): void {
        this._unsubscribePost();
    }

    @Output() postSubmitted: EventEmitter<Post> = new EventEmitter();

    ngOnInit(): void {
        this.nowDatetimeLocal = this._formatDateToDatetimeLocal(new Date());
        if(this._userDataService.currentUser){
            this.curUser = this._userDataService.currentUser;
        }else{
            this._router.navigate(["/login"]);
        }
    }

    private _formatDateToDatetimeLocal(date: Date) {
        return `
            ${this._fixPad(date.getFullYear(), 4)}-
            ${this._fixPad(date.getMonth() + 1, 2)}-
            ${this._fixPad(date.getDate(), 2)}T
            ${this._fixPad(date.getHours(), 2)}:
            ${this._fixPad(date.getMinutes(), 2)}`.replace(/\n/gi, "").replace(/ /gi, "");
    }

    private _fixPad(datePart: number, length: number): string {
        return `0000${datePart}`.slice(-length);
    }

    private _getPostPublicationDate(formPublicationDate: string): number {
        let publicationDate: Date;
        if (this.publicationDateScheduled) {
            publicationDate = new Date(formPublicationDate);
            if (isNaN(publicationDate.getTime())) {
                publicationDate = new Date();
            }
        }
        else {
            publicationDate = new Date();
        }
        return publicationDate.getTime();
    }

    setScheduling(schedule: boolean): void {
        this.publicationDateScheduled = schedule;
    }

    submitPost(form: FormGroup): void {
        this._unsubscribePost();

        let post: Post = Post.fromJson(form.value);
        post.author = this.curUser.pk;
        post.author_username = this.curUser.username;
        post.id = 0;
        
        this._postSubscription = this._postService.createPost(post)
        .subscribe(
            (data) => {
                console.log(data);
                this._vMsg = false;
                this._router.navigate(["/post"]);
            },
            (error) => {
                //if(error.status == 400){
                    console.log(error);
                    this._msgPost = error._body;
                    this._vMsg = true;
                //}
            }
        );
        
        //this.postSubmitted.emit(post);
    }

    private _unsubscribePost(): void {
        if (this._postSubscription) {
            this._postSubscription.unsubscribe();
        }
    }
}