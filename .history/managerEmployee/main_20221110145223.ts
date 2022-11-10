class Employee {
    private _lastName: string = "";
    private _firstName: string = "";
    private _birthDate: Date = new Date();
    private _address: string = "";
    private _jobPosition: string = "";

    constructor() {
    }

    getLastName(): string {
        return this._lastName;
    }

    setLastName(lastName: string): void {
        this._lastName = lastName;
    }

    getFirstName(): string {
        return this._firstName;
    }
    setFirstName(firstName: string): void {
        this._firstName = firstName;
    }
    getBirthDate(): Date {
        return this._birthDate;
    }
    setBirthDate(birthDate: Date): void {
        this._birthDate = birthDate;
    }
    getAddress(): string {
        return this._address;
    }
    setAddress(address: string): void {
        this._address = address;
    }
    getJobPosition(): string {
        return this._jobPosition;
    }
    setJobPosition(jobPosition: string): void {
        this._jobPosition = jobPosition;
        

}