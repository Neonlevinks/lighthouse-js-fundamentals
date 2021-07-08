const temperature = 16;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!"); // this will run for all temperatures under 0 degrees
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!"); // this will run for all temperatures between 0 and 15 degrees.
} else {
  console.log("Short sleeves are fine.");
} //this will run for all temperatures above 15 degrees. 

console.log("Now you're ready to go outside!");