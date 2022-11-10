class User {
    protected name: string = "";
    protected email: string = "";
    public role: in
    
    constructor() {
    }
    

    getInfo() {
        return this.name + " " + this.email;
    }


}