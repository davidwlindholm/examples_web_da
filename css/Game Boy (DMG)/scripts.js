/**
 * © David Lindholm - me@davidlindholm.info
 * License: GNU Affero General Public License v3.0
 * Legal: https://www.gnu.org/licenses/agpl-3.0.en.html
 */
var consoleoff = true;
var offcolour = "rgb(107, 93, 94)";
var offborder = "rgb(90, 72, 74)";
var oncolour = "rgb(231, 11, 30)";
var onborder = "rgb(163, 22, 33)";

$(document).ready(function(e) {
  $( "#onofftext" ).click(function() {
    if (consoleoff) {
      $("#powerled").css("background-color", oncolour);
      $("#powerled").css("border-color", onborder);
      consoleoff = false;
    }
    else {
      $("#powerled").css("background-color", offcolour);
      $("#powerled").css("border-color", offborder);
      consoleoff = true;
    }
  });
});
