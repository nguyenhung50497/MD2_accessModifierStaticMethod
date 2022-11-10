class User {
    protected name: string = "";
    protected email: string = "";
    public role:
    
    constructor() {
    }
    public getName(): string {
        return this.name;
    }

    getInfo() {
        return this.name + " " + this.email;
    }


}