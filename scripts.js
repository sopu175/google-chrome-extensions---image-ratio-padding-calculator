var calcuation = (function () {
   "use strict";
   var btn = document.getElementById("btn"),
      w = document.getElementById("width"),
      h = document.getElementById("height"),
      ans = document.getElementById("calculation"),
      output = "";

   btn.addEventListener("click", function (e) {
      e.preventDefault();
      output = ((Math.round(h.value) / Math.round(w.value)) * 100).toFixed(2);
      if (output > 0) {
         ans.innerHTML = "padding-top: " + output.replace(".00", "") + "%";
      } else {
         ans.innerHTML = "Invalid dimensions";
      }
   });
})();
