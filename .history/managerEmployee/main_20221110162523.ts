
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

let employee1 = new Employee("Adam", "Black", new Date("1990-09-19"), "New York", "Leader");
let employee2 = new Employee("Eva", "White", new Date("1991-08-17"), "New York", "President");
let employee3 = new Employee("Man", "Super", new Date("1992-07-15"), "New York", "Protector");
let employee4 = new Employee("Woman", "Wonder", new Date("1993-06-13"), "New York", "Timer");
let employee5 = new Employee("Flash", "The", new Date("1994-05-11"), "New York", "Shipper");

console.log(employeeList.getListEmployees());