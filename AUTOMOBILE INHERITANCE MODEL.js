

function SUV(make, model, year, numberOfDoors, offRoadCapable) {
 
    FourWheeler.call(this, make, model, year, numberOfDoors);
  
    this.offRoadCapable = offRoadCapable;
  }
  
  SUV.prototype = Object.create(FourWheeler.prototype);
  
 
  SUV.prototype.displayOffRoadCapability = function () {
    console.log(`Off-road capable: ${this.offRoadCapable}`);
  };
  
 
  function Sedan(make, model, year, numberOfDoors, luxuryFeatures) {
  
    FourWheeler.call(this, make, model, year, numberOfDoors);
  
    this.luxuryFeatures = luxuryFeatures;
  }
 
  Sedan.prototype = Object.create(FourWheeler.prototype);
  
  Sedan.prototype.displayLuxuryFeatures = function () {
    console.log(`Luxury features: ${this.luxuryFeatures}`);
  };
  

  const suv = new SUV('Jeep', 'Wrangler', 2023, 4, true);
  const sedan = new Sedan('BMW', '7 Series', 2023, 4, true);
 
  suv.displayInfo();
  sedan.displayInfo();
  
  suv.displayDoors();
  suv.displayOffRoadCapability();
  
  sedan.displayDoors();
  sedan.displayLuxuryFeatures();
  