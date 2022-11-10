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
        if (this.role === Int.ADMIN) {
            return "Adim";
        }
        else {
            return "User";
        }
    }

    setName(name: string) {
        this.name = name;
    }
    setEmail(email: string) {
        this.email = email;
    }
    setRole(role: Int) {
        this.role = role;
    }
}

let usersList: User[] = [];

usersList.push(new User("Black Adam", "black@adam.com", 1));
usersList.push(new User("Shazam", "shazam@adam.com", 2));

usersList.forEach(user => {
    console.log(user.getInfo());
    console.log(
        user.isAdmin()
        );
})