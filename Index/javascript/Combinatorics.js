function combinations() {
  var N_raw = document.getElementById("CombNset").value;
  var N = parseInt(N_raw);
  var R_raw = document.getElementById("CombRset").value;
  var R = parseInt(R_raw);
  var f = (N - R);
  console.log(f);

  if (isNaN(result) == false || N <= 0 || R <= 0 || R > N) {
    document.getElementById("CombResult").innerHTML = "<br>Check your inputs <br> N value cannot be smaller than R <br> and it cannot be 0 or a negative value";

  } else {

    for (i = N - 1; i > 0; i--) {
      N = N * i;
    }
    for (i = R - 1; i > 0; i--) {
      R = R * i;
    }
    for (i = f - 1; i > 0; i--) {
      f = f * i;
    }
    var result = Math.round(parseFloat(N / (R * f)));

    document.getElementById("CombResult").innerHTML = "<br>" + result;
    console.log(result);
  }
  if (isNaN(result) == true) {
    console.log("test2")
    document.getElementById("CombResult").innerHTML = "<br>Check your inputs <br> N value cannot be smaller than R <br> and it cannot be 0";
  }

}

function factorialize(num) {
  if (num < 0) {
    return -1;
  } else if (num == 0) {
    return 1;
  } else {
    return (num * factorialize(num - 1));
  }
}


function permutations() {
  var N_raw = document.getElementById("PermNset").value;
  var N = parseInt(N_raw);
  var R_raw = document.getElementById("PermRset").value;
  var R = parseInt(R_raw);
  var f = (N - R);
  var switch1 = document.getElementById("SamplingSwitch");
  var resultSampling = Math.pow(N, R);
  var resultNoSampling = Math.round(parseFloat(factorialize(N) / (factorialize(N - R))));



  if (switch1.checked == true) {
    if (N <= 0 || R <= 0 || R > N || resultSampling == Infinity) {
      document.getElementById("PermResult").innerHTML = "Check your inputs";
    } else {
      document.getElementById("PermResult").innerHTML = resultSampling;
    }
  }
  if (switch1.checked == false) {
    if (N <= 0 || R <= 0 || R > N || resultNoSampling == Infinity || isNaN(resultNoSampling) == true) {
      document.getElementById("PermResult").innerHTML = "Check your inputs";
    } else {
      document.getElementById("PermResult").innerHTML = resultNoSampling;
    }

  }

}
