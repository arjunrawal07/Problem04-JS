class DogWalker {
  numberOfWalksCalculator(dogSizes) {
    //Initiate numberOfWalks as a counter and object literal to record frequency of each size
    let dogSizeInventory = {};
    let numberOfWalks = 0;
    //Loop through given dogSizes array and populate dogSizeInventory object
    for (let dogSize of dogSizes) {
      if (!dogSizeInventory[dogSize]) {
        dogSizeInventory[dogSize] = 1;
      } else {
        dogSizeInventory[dogSize]++;
      }
    }
    //Look up the frequency of each size
    for (let size in dogSizeInventory) {
      //Divide each size's frequency by 2, round up in case the division is not even and add that value to the number of walks
      numberOfWalks += Math.ceil(dogSizeInventory[size] / 2);
    }
    console.log(numberOfWalks);
    return numberOfWalks;
  }
}

module.exports = DogWalker;
