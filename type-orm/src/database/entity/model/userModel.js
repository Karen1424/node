class User {

    constructor(email,password,fullName,country,age) {
        this.email = email;
        this.password = password;
        this.country = country;
        this.age = age;
    }
}

module.exports = User;