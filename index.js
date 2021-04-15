
function leashDog(dogName, dogBreed) {
  const a = "Boo Radley";
  const b = "Pibble";
  return (`Leash ${a} the ${b}`);
}


function walkToPark (dogName, dogBreed) {
  const a = "Bunny";
  const b = "Labrador";
  return (`Walk to the park with ${a} the ${b}`);
}


function throwFrisbee(dogName, dogBreed) {
  const a = "Mary J. Blige";
  const b = "Papillon";
  return (`Throw the frisbee for ${a} the ${b}`);
}


function walkHome(dogName, dogBreed) {
  const a = "Santa Paws";
  const b = "Husky";
  return (`Walk home with ${a} the ${b}`);
}


function unleashDog(dogName, dogBreed) {
  const a = "Lauren";
  const b = "Golden Retriever";
  return (`Unleash ${a} the ${b}`);
}


function wakeDog(dogName, dogBreed) {
  return (`Wake ${dogName} the ${dogBreed}`);
}




// const n1 = wakeDog();
// const n2 = leashDog();
// const n3 = walkHome();
// const n4 = throwFrisbee();
// const n5 = walkHome();
// const n6 = unleashDog();

//const routine = [n1, n2, n3, n4, n5, n6];
let routine = [wakeDog,leashDog, walkHome, throwFrisbee, walkToPark, unleashDog];

function exerciseDog (dogName, dogBreed){
  for (let i=0; i<routine.length; i++){
    return routine[i](dogName, dogBreed);
  }
}
exerciseDog("Esther", "Dalmation");
