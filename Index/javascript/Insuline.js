function InsulineCalc() {
  var sugar_raw = document.getElementById("bloodsugar").value;
  var sugar = Math.floor(sugar_raw);
  var units_raw = document.getElementById("InsulineUnits").value;
  var units = Math.floor((units_raw * 2) / 2);
  var carbs_raw = document.getElementById("Carbs").value;
  var carbs = Math.floor(carbs_raw / 10)
  var wanted = Math.floor(Math.random() * (7.5 - 6.5 + 1)) + 6.5;
  var result = 0;
  console.log(carbs);


  if (sugar == 0 || units == 0 && carbs == 0) {
    document.getElementById("InsulineOutput").innerHTML = " <h2> There can't be results if you won't give me proper values.</h2> <p>You have to at least input your blood sugar</p>";
  } else {
    if (sugar <= 5 && carbs == 0) {
      result = Math.floor(((sugar - wanted) + carbs) * units);
      document.getElementById("BloodSugarEstimate").innerHTML = wanted;
      document.getElementById("InsulineOutput").innerHTML = " <p>You should inject: </p><br>" + result + "<br><p> units to maintain a healthy bloodsugar balance.</p>";
      console.log(result);
    } else if (sugar > 5) {
      result = Math.floor(((sugar - wanted) + carbs) * units);
      document.getElementById("BloodSugarEstimate").innerHTML = "<p>Your blood sugar in 2 hours will be roughly: </p>" + wanted;
      document.getElementById("InsulineOutput").innerHTML = " <p>You should inject: </p><br>" + result + "<br><p> units to maintain a healthy bloodsugar balance.</p>";
      console.log(result);
    } else if (sugar <= 5 && carbs <= 0 || isNaN(carbs) == true) {
      document.getElementById("BloodSugarEstimate").innerHTML = "YOU SHOULD EAT";
    }
  }
}
