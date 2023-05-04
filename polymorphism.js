class Animal{

    constructor(name){
        this.name = name;

    }

    eats(){
        console.log(this.name +  ' eats foods');
 
    }  

}

// let animal = new Animal('dog');
// animal.eats();

class Alligator extends Animal{
    eats(){
        super.eats(); //// here it is taking eat function of child class
       console.log(this.name +  ' eats fishes'); 
    }
}

let murphy = new Alligator('Murphy')
murphy.eats();