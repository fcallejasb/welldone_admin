export class UserReg{

    constructor(
        public pk: number,
        public username: string,
        public password1: string,
        public password2: string,
        public email: string,
        public first_name: string,
        public last_name: string
    ){}

    static fromJson(json: any): UserReg {
        return new UserReg(
            json.pk,
            json.username,
            json.password1,
            json.password2,
            json.email,
            json.first_name,
            json.last_name
        );
    }
}