type Employee = { name: string }
abstract class Department {
    static fisicalYear = 2020
    // private name: string // this is pure typescript
    protected employees: Employee[]
    private lastReport: string

    constructor(readonly id: number, private n: string) { // readonly: initialize just once
      console.log(Department.fisicalYear)  
      this.employees = []
      this.lastReport = '' 
    }

    static createEmployee(name: string): Employee {
        return { name }
    }

    abstract addEmployee(employee: Employee): void

    get mostRecentReport() {
        return 'REPORT' + this.lastReport
    }

    set mostRecentReport(value: string) {
        if (!value) throw { message: 'Cannot be empty', errorCode: 400 }
        this.lastReport = 'REPORT' + value
    }
}

class ITDepartment  extends Department {
    constructor(id: number) {
        super(id, 'IT')
    }

    addEmployee (employee: Employee): void { // private is a typescript thing, new in new javascript versions
      this.employees.push(employee)
    }


}

const accountant = new ITDepartment(2)

accountant.addEmployee({ name: 'Eze' })