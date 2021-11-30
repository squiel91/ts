"use strict";
class Department {
    constructor(id, n) {
        this.id = id;
        this.n = n;
        console.log(Department.fisicalYear);
        this.employees = [];
        this.lastReport = '';
    }
    static createEmployee(name) {
        return { name };
    }
    get mostRecentReport() {
        return 'REPORT' + this.lastReport;
    }
    set mostRecentReport(value) {
        if (!value)
            throw { message: 'Cannot be empty', errorCode: 400 };
        this.lastReport = 'REPORT' + value;
    }
}
Department.fisicalYear = 2020;
class ITDepartment extends Department {
    constructor(id) {
        super(id, 'IT');
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
}
const accountant = new ITDepartment(2);
accountant.addEmployee({ name: 'Eze' });
//# sourceMappingURL=classes.js.map