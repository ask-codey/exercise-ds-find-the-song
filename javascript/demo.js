// Tries your functions on the lesson's library. Run it with: node demo.js
import { binaryLooks, binarySearch, linearLooks, linearSearch } from "./find-the-song.js";

const library = ["Amber Road", "Blue Hour", "Copper Moon", "Desert Lights", "Echo Park", "Falling Up", "Golden Hour", "Harbor Lights", "Lemon Skies", "Midnight Bus", "Neon Garden", "Paper Boats", "Quiet Harbor", "Slow Rain", "Sunday Static", "Velvet Train"];

console.log(`Library: ${library.length} songs, A to Z`);
for (const title of ["Quiet Harbor", "Orange Sky"]) {
  console.log(`${title}: linear finds position ${linearSearch(library, title)} in ${linearLooks(library, title)} looks; `
    + `binary finds position ${binarySearch(library, title)} in ${binaryLooks(library, title)} looks`);
}

const big = [];
for (let i = 1; i <= 1000; i++) {
  big.push(`Song ${String(i).padStart(4, "0")}`);
}
console.log(`1,000 songs, the last one: linear takes ${linearLooks(big, "Song 1000")} looks; binary takes ${binaryLooks(big, "Song 1000")} looks`);
