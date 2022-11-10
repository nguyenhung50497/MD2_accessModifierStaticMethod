enum Int {
    ADMIN = 1,
    USER
}

class User {
    protected name: string = "";
    protected email: string = "";
    public role: Int;
    
    constructor() {
    }

    getInfo() {
        return this.name + " " + this.email;
    }

    isAdmin() {
        return this.role === Int.ADMIN;
    }
}

let user: User = new User();