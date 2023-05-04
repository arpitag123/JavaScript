class car{

    setName(name){
        this.name= name;

    }
    startEngine(){
        console.log('engine started' + this.name)

    }

    stopEngine(){
        console.log('engine stopped ' + this.name)
    }
    
}

class Toyota extends car{

    TopSpeed(speed){

    console.log('top speed for' + this.name +' is '+ speed )
    }
}

let mycar = new Toyota();
mycar.setName('ritz');
mycar.startEngine();
mycar.stopEngine();
mycar.TopSpeed(120);