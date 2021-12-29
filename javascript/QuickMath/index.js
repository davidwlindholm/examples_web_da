/**
 * © David Lindholm - me@davidlindholm.info
 * License: GNU Affero General Public License v3.0
 * Legal: https://www.gnu.org/licenses/agpl-3.0.en.html
 */
function regn() {
  let tal1 = document.getElementById("tal1").value;
  let tal2 = document.getElementById("tal2").value;
  let resultat;
  Number.isInteger(+tal1)
    ? Number.isInteger(+tal2)
      ? (resultat = +tal1 + +tal2)
      : (resultat = "Tal 2 må kun være tal")
    : (resultat = "Tal 1 må kun være tal");

  tal1 = parseInt(tal1);
  tal2 = parseInt(tal2);

  document.getElementById("res").value = resultat;
}
