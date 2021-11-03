/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
  this.bigSlots = big;
  this.medSlots = medium;
  this.smallSlots = small;
  this.big = 0;
  this.med = 0;
  this.small = 0;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
  if (carType === 1) {
    carType = 'big';
  } else if (carType === 2) {
    carType = 'med';
  } else {
    carType = 'small';
  }
  if (this[carType] < this[carType + 'Slots']) {
    this[carType]++;
    return true;
  } else {
    return false;
  }
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */