class User {
    protected name: string = "";
    protected email: string = "";
    
    
    constructor() {
    }
    

    getInfo() {
        return this.name + " " + this.email;
    }

    isAdmin() {
    }
}