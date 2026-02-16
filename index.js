let result = prompt("Enter a list of comma separated froyo flavors");
console.log("User entered: " + result);

//
//
//

let flavorsArray = result.split(",");
console.log(result.split(","));

//
//
//
let flavorCounts = {};

if (result) {
  for (let i = 0; i < flavorsArray.length; ++i) {
    let flavor = flavorsArray[i];
    if (flavorCounts[flavor]) {
      flavorCounts[flavor]++;
    } else {
      flavorCounts[flavor] = 1;
    }
  }
  console.log(flavorCounts);
}

//
//
//

function countFrequencies(flavorsArray) {
  for (let i = 0; i < flavorsArray.length; ++i) {
    let flavor = flavorsArray[i];
    if (flavorCounts[flavor]) {
      flavorCounts[flavor]++;
    } else {
      flavorCounts[flavor] = 1;
    }
  }
  return flavorCounts;
}
