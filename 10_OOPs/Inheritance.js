class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course added by ${this.username}`);
    }
}

const Dev = new Teacher("Dhruv", "Dk@google.com", "234567");
Dev.addCourse();
// console.log(Dev);

const aryan = new User("Aryan");
aryan.logMe();

console.log(Dev == aryan);
console.log(Dev instanceof Teacher);
console.log(Dev instanceof User);