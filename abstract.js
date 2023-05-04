function Employee(name, age, salary){
    this.name= name;
    this.age = age;
    this.salary = salary;

    let monthlyBonus = 1000;
     let calfinalSalary = function(){
        let finalsalary = monthlyBonus + salary;
        console.log('final salary is : ' + finalsalary);
     }

    this.getEployeeDetails = function(){
        console.log('Name : ' + this.name + ' Age: ' + this.age);
        calfinalSalary();
    }
    
}

let emp = new Employee('john', 34, 40000)
emp.getEployeeDetails();