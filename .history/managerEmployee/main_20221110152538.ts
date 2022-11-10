class Employee {
    _lastName: string = "";
    _firstName: string = "";
    _birthDate: Date = new Date();
    _address: string = "";
    _jobPosition: string = "";

  constructor(_lastName: string, _firstName: string, _birthDate: Date, _address: string, _jobPosition: string) {
    this._lastName = _lastName;
    this._firstName = _firstName;
    this._birthDate = _birthDate;
    this._address = _address;
    this._jobPosition = _jobPosition;
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

    getListEmployees(): Employee[] {
        return this.employees;
    }

    showEmployee(firstName: string): void {
        let i = -1;
        this.employees.forEach((employee, index) => {
            if (employee._firstName === firstName) {
                i = index;
            }
        }
        )
        return i;
    }

    delete(firstName: string): void {
        let indexEmployeeDelete = this.findEmployee(firstName);
        if (indexEmployeeDelete != -1) {
            this.employees.splice(indexEmployeeDelete, 1);
        } else {
            throw new Error('delete error')
        }
    }

    update(firstName: string) {
        let indexEmployeeUpdate = this.findEmployee(firstName);
        if (indexEmployeeUpdate != -1) {
            this.employees[indexEmployeeUpdate].setFirstName(firstName);
        } else {
            throw new Error('update error')
        }
    }

    findEmployee(firstName: string) {
        let i = -1;
        this.employees.forEach((employee, index) => {
            if (employee._firstName === firstName) {
                i = index;
            }
        }
        )
        return i;
    }
}

let employeeList: Employee[] = [];

employeeList.push(new Employee("Adam", "Black", new Date("1990-09-19"), "New York", "Leader"));
employeeList.push(new Employee("Eva", "White", new Date("1991-08-17"), "New York", "President"));
employeeList.push(new Employee("Man", "Super", new Date("1992-07-15"), "New York", "Protector"));
employeeList.push(new Employee("Woman", "Wonder", new Date("1993-06-13"), "New York", "Timer"));
employeeList.push(new Employee("Flash", "The", new Date("1994-05-11"), "New York", "Shipper"));

console.log(