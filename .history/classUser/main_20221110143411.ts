enum Int {
    ADMIN = 1,
    USER
}

class User {
    protected name: string = "";
    protected email: string = "";
    public role: Int;
    
  constructor(name:srole: Int) {
    this.role = role;
  }    

    getInfo() {
        return this.name + " " + this.email;
    }

    isAdmin() {
        return this.role === Int.ADMIN;
    }
}

let usersList: User[] = [];

usersList.push(new User("Black Adam", "black@adam.com", 1));
usersList.push(new User("Shazam", "shazam@adam.com", 2));
