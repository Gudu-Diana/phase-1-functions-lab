// Code your solution in this file!

function distanceFromHqInBlocks (someValue) {
    const hQBlock = 42;
    return Math.abs(someValue - hQBlock);
  }

  function distanceFromHqInFeet(someValue) {
    const blockToFeet = 264;
    return distanceFromHqInBlocks(someValue) * blockToFeet;
  }

  function distanceTravelledInFeet(start, destination) {
    let distance = Math.abs(destination - start);
    const blockToFeet = 264;
    return distance * blockToFeet;
  }

  function calculatesFarePrice(start, destination) {

    let distance = distanceTravelledInFeet(start, destination)

    if (distance <= 400){
      return 0;
    } 
      else if (distance <= 2000){
      return (distanceTravelledInFeet(start, destination) -400) * 0.02;
    } 
      else if (distance <= 2500){
      return 25;
    }
    else{
      return 'cannot travel that far'
    }
  }
