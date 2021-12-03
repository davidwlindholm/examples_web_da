/**
 * © David Lindholm - me@davidlindholm.info
 * License: GNU Affero General Public License v3.0
 * Legal: https://www.gnu.org/licenses/agpl-3.0.en.html
 */
 function goerRoed() {
   let element = document.getElementById("hovedtekst");
   element.classList.add("roed-tekst");
 }

 function fjernRoed() {
   let element = document.getElementById("hovedtekst");
   element.classList.remove("roed-tekst");
 }

 function skiftStoerrelse() {
   let element = document.getElementById("hovedtekst");
   if (element.classList.contains("roed-tekst")) {
     element.classList.add("stor-tekst");
   }
   else {
     element.classList.remove("stor-tekst");
   }
 }
