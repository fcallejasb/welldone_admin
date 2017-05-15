export class User{

    constructor(
        public pk: number,
        public username: string,
        public password: string,
        public email: string,
        public first_name: string,
        public last_name: string
    ){}

    static fromJson(json: any): User {
        return new User(
            json.pk,
            json.username,
            json.password,
            json.email,
            json.first_name,
            json.last_name
        );
    }
}