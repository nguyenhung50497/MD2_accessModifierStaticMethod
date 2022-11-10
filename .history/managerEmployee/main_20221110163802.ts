class Employee {
    _firstName: string = "";
    _lastName: string = "";
    _birthDate: Date = new Date();
    _address: string = "";
    _jobPosition: string = "";

  constructor(_firstName: string, _lastName: string, _birthDate: Date, _address: string, _jobPosition: string) {
    this._firstName = _firstName;
    this._lastName = _lastName;
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
        this.employees.filter(employee => employee._firstName === firstName).forEach((employee) => {console.log(employee)}
        )
    }

    delete(firstName: string): void {
        let indexEmployeeDelete = this.findEmployee(firstName);
        if (indexEmployeeDelete != -1) {
            this.employees.splice(indexEmployeeDelete, 1);
        } else {
            throw new Error('delete error')
        }
    }

    update(firstName: string, lastName: string, birthDate: never): void {w) {
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

let employee1 = new Employee("Adam", "Black", new Date("1990-09-19"), "New York", "Leader");
let employee2 = new Employee("Eva", "White", new Date("1991-08-17"), "New York", "President");
let employee3 = new Employee("Man", "Super", new Date("1992-07-15"), "New York", "Protector");
let employee4 = new Employee("Woman", "Wonder", new Date("1993-06-13"), "New York", "Timer");
let employee5 = new Employee("Flash", "The", new Date("1994-05-11"), "New York", "Shipper");

let employeeManager = new EmployeeManager();

employeeManager.addEmployee(employee1);
employeeManager.addEmployee(employee2);
employeeManager.addEmployee(employee3);
employeeManager.addEmployee(employee4);
employeeManager.addEmployee(employee5);

// console.log(employeeManager.getListEmployees());

// employeeManager.showEmployee("Woman");

employeeManager.delete("Man");
console.log(employeeManager.getListEmployees());
