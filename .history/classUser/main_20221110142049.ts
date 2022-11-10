class User {
    protected name: string = "";
    protected email: string = "";
    public role:
    
    constructor() {
    }



    getInfo() {
        return this.name + " " + this.email;
    }


}