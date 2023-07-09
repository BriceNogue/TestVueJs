export class UserModel {
    firstname = '';
    lastname = '';
    email = '';
    age = null;
    password = '';

    constructor (
        fname = '',
        lname = '',
        email = '',
        age = null,
        password = ''
    ) {
        this.firstname = fname;
        this.lastname = lname;
        this.email = email;
        this.age = age;
        this.password = password
    }
}