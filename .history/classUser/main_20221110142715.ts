enum Int {
    ADMIN = 1,
    USER
}

class User {
    protected name: string = "";
    protected email: string = "";
    public role: Int = 1;
    
    constructor() {
    }
    

    getInfo() {
        return this.name + " " + this.email;
    }

    isAdmin() {

    }
}