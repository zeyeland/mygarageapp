var stack1 = [];
var stack2 = [];
var stack3 = [];
var tempStack = []
var carNumber;
var carModel;
var theCar;

document.getElementById("addCar1").addEventListener("click", function(){
     carNumber = document.getElementById("carNumber").value;
     carModel = document.getElementById("carModel").value;
     theCar = [carNumber, carModel];
     pushCar(stack1,theCar);
});

document.getElementById("addCar2").addEventListener("click", function(){
     carNumber = document.getElementById("carNumber").value;
     carModel = document.getElementById("carModel").value;
     theCar = [carNumber, carModel];
     pushCar(stack2,theCar);
});

document.getElementById("addCar3").addEventListener("click", function(){
     carNumber = document.getElementById("carNumber").value;
     carModel = document.getElementById("carModel").value;
     theCar = [carNumber, carModel];
     pushCar(stack3,theCar);
});

function pushCar(stackNumber, thisCar){
    stackNumber.push(thisCar);
    console.log(stack1);
}

function popCar(){

}

