class Employee{


    setEmpDetails(name, id, phoneno){
        this.name = name;
        this.id= id;
        this.phoneno = phoneno;

    }
    getEmpName(){
        return this.name;
    }

    getEmpid(){
        return this.id;
    }
    getEmpPhoneno(){
        return this.phoneno;
    }
    
}

let emp1 = new Employee();
emp1.setEmpDetails('john', 3434, 89767757565);
console.log(emp1.getEmpName(), emp1.getEmpid(), emp1.getEmpPhoneno())

