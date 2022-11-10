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

}

class EmployeeManager {
    employees: Employee[] = [];

    constructor() {
    }

    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    getEmployees(): Employee[] {
        return this.employees;
    }

    delete(firstName: string): void {
        let indexEmployeeDelete = this.findEmployee(firstName);
        if (indexEmployeeDelete != -1) {
            this.employees.splice(indexEmployeeDelete, 1);
        } else {
            throw new Error('delete error')
        }
    }

    update(ID: string, name: string) {
        let indexEmployeeUpdate = this.findEmployee(ID);
        if (indexEUpdate != -1) {
            this.employees[indexBookUpdate].setName(name);
        } else {
            throw new Error('update error')
        }
    }

    findEmployee(ID: string) {
        let i = -1;
        this.books.forEach((book,  index) => {
            if (book.ID === ID) {
                i = index;
            }
        })

        return i;
    }
}