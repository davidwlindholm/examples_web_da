/**
 * © David Lindholm - me@davidlindholm.info
 * License: GNU Affero General Public License v3.0
 * Legal: https://www.gnu.org/licenses/agpl-3.0.en.html
 */
function udregning() {
  var katete1 = document.getElementById("katete1").value;
  var katete2 = document.getElementById("katete2").value;
  var tempHypo = Math.pow(katete1, 2) + Math.pow(katete2, 2);
  var hypotenuse = Math.sqrt(tempHypo);
  document.getElementById("resultat").innerHTML = hypotenuse;
}
