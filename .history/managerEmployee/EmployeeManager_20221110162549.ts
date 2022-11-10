import {}

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