class User {
    protected name: string = "";
    protected email: string = "";
    public role:
    
    constructor() {
    }

    public getInfo() {
        return this.name + " " + this.email;
    }


}