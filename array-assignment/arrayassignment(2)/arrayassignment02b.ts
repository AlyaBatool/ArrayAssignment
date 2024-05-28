let space='\n';
//Multi Dimensional Array and Tuples - Student Grades 
//Create type alias named Student
type Student = {
    name:string;
    grades:number[];
}
//Array with atleast three student object and their grades
const students:Student[] =[
    {name: 'Alya',
    grades:[85,87,82,90],
},
    {name: 'Natasha',
    grades:[79,80,89,81],
},
    {name: 'Ali',
    grades:[92,67,55,77],
},
{name: 'hania',
grades:[95,69,75,77],
}
]
//Function named calculateAverageGrade takes input as grade and return output as average
function calculateAverageGrade(grades:number[]){
    const average= grades.reduce((sum,grade) => sum+grade, 0);
    return average/grades.length;
}
console.log('List of grades of Students : ');
students.forEach(students => {
    console.log(`The average grade of ${students.name} is ${calculateAverageGrade(students.grades)}`);   
});
