//PART 1
const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
    ];

function getCarHonda(carInventory) {
    let car = carInventory.find((item) => item.car_make === "Honda");
        return `This is a ${car.car_make} ${car.car_model} from ${car.car_year}.`;
    }
    
    
console.log(getCarHonda(inventory)); 

//PART 2


function sortCarInventoryByYear(carInventory) {

    carInventory.sort(function (a, b) {
    return a.car_year - b.car_year;
    });
    
    return carInventory;
    }
    
  
    
    console.log(sortCarInventoryByYear(inventory));