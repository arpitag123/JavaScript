
let  EmpDetails = function(name,age){
    this.name = name;
    this.age = age;
     
    // this.getName = function(){
    //     return this.name;
    // }

    // this.getAge = function(){
    //     return this.age;
    // }
}

    EmpDetails.prototype.getName = function(){
            return this.name;
        }

     EmpDetails.prototype.getAge = function(){
             return this.age;
        }
    
let emp1 = new EmpDetails('john', 12);
let emp2 = new EmpDetails('herry', 14);
console.log(emp1.getName());
console.log(emp1.getAge()); 

