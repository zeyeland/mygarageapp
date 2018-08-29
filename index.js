
document.getElementById("addCar").addEventListener("click", function(){
    var car = new cars("red", "Zyris", "0101" , "mustang");
    var car = new cars("blue", "Shakir", "0202" , "school bus");
});

document.getElementById("removeCar").addEventListener("click", function(){
   var licenceNumber = document.getElementById("plateNumber").value;
   removeCar(licenceNumber);
});


