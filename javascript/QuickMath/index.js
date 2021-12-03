/**
 * © David Lindholm - me@davidlindholm.info
 * License: GNU Affero General Public License v3.0
 * Legal: https://www.gnu.org/licenses/agpl-3.0.en.html
 */
function regn() {
  let tal1 = document.getElementById('tal1').value;
  let tal2 = document.getElementById("tal2").value;

  tal1 = parseInt(tal1);
  tal2 = parseInt(tal2);

  let resultat = tal1 + tal2;
  document.getElementById("res").innerHTML = resultat;
}
