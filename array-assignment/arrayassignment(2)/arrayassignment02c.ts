
//Type alias named Employee
type Employee ={
    name: string;
    hoursWorked: number;
    hourlyRate: number;
    salary: number;
 };
//Employee array with three objects
const employees: Employee[] =[
    {name: 'Zain', 
    hoursWorked: 10, 
    hourlyRate: 500, 
    salary: 0,
},
   {name:'Neelum',
    hoursWorked: 15,
    hourlyRate: 500, 
    salary: 0,
},
    {name: 'Jospeh',
     hoursWorked: 24, 
     hourlyRate: 500,
      salary: 0,
    },
    
    {name:'Leonardo',
     hoursWorked: 35,
     hourlyRate: 500, 
     salary: 0,
},
];
//Implement function and calculate salary
function calculateSalary(employee: Employee): number {
    let salaryEmp=(employee.hoursWorked)*(employee.hourlyRate);
    if (employee.hoursWorked>=20){
        const bonus=(salaryEmp*(10/100));   //10 % bonus for employee who worked 20 or 20 + hours
        salaryEmp+=bonus;
    }
    employee.salary=salaryEmp;
    return employee.salary;
}

console.log('Employee : Salary');
//Name of employee and their salary based on their working hour
for(const employee of employees) {
    calculateSalary(employee);
    console.log(`${employee.name} : ${employee.salary} PKR`);
    
}