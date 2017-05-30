import { User } from '../entities/user';
import { Categories } from '../entities/categories';

export class Post{

    constructor(
        public id: number,
        public title: string,
        public intro: string,
        public content: string,
        public url_media: string,
        //public categories: Categories[],
        public publicated_at: String,
        //public state: string,
        //public type: string,
        public author: number,
        public author_username: String
        //public likes: number,
        //public post_response: Post[],
        //public user_mention: User[]
    ){}

    static fromJson(json: any): Post {
        return new Post(
            json.id,
            json.title,
            json.intro,
            json.content,
            json.url_media,
            //json.categories,
            json.publicated_at,
            //json.state,
            //json.type,
            json.author,
            json.author_username,
            //json.likes
        );
    }
}