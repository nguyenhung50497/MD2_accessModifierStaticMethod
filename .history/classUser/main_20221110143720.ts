enum Int {
    ADMIN = 1,
    USER
}

class User {
    protected name: string = "";
    protected email: string = "";
    public role: Int;
    
  constructor(name:string, email: string, role: Int) {
    this.name = name;
    this.email = email;
    this.role = role;
  }    

    getInfo() {
        return this.name + " " + this.email;
    }

    isAdmin() {
        return this.role === Int.ADMIN;
    }

    setName(name) {)
}

let usersList: User[] = [];

usersList.push(new User("Black Adam", "black@adam.com", 1));
usersList.push(new User("Shazam", "shazam@adam.com", 2));

console.log(usersList);