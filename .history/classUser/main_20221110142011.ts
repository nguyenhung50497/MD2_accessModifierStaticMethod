class User {
    protected name: string = "";
    protected email: string = "";
    public role:
    
    constructor() {
    }

    getInfor() {
        return this.name + " " + this.email;
    }

    
}