var car = {
  model: "Tesla",
  color: "metalic",
  year: "2021",
  power: "electric-powered",
  transmissionType: "automatic",
  additionalSpecs: {
    range: "390 mi",
    topSpeed: "200"
  },
  carBreak: function carBreak(speed) {
    if (speed === 200) {
      console.log(this.model, "break!");
    }
  },
  carSpeedUp: function carSpeedUp(speed) {
    if (speed < 80) {
      console.log(this.model, "speed up!");
    }
  },
  carRotate: function carRotate(showTime) {
    if (showTime === true)
      console.log(this.model, "rotate!")
  },
}

console.log(car);
car.carBreak(200);
car.carSpeedUp(70);
car.carRotate(true);

for (var property in car.additionalSpecs) {
  console.log(property + ": " + car.additionalSpecs[property]);
}

console.log(car.model, "is quite expensive but due to it being", car.power, "eco friendly.");

console.log(JSON.stringify(car));

// bonus

console.log(Object.getOwnPropertyNames(car));

