class Application {
    private name:string;
    static count:number = 0;

    constructor(name:string) {
        this.name = name;
        Application.count++;
    }
}