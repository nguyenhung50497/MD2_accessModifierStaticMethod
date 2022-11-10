class User {
    protected name: string = "";
    protected email: string = "";
    public role:
    
    constructor() {
    }

    pgetInfo() {
        return this.name + " " + this.email;
    }


}