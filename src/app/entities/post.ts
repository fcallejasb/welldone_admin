import { User } from '../entities/user';
import { Categories } from '../entities/categories';

export class Post{

    constructor(
        public post_id: number,
        public title: string,
        public intro: string,
        public content: string,
        public url_media: string,
        public categories: Categories[],
        public publicate_at: Date,
        public state: string,
        public type: string,
        public author: User,
        public likes: number,
        //public post_response: Post[],
        //public user_mention: User[]
    ){}
}