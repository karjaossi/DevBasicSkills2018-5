


function randomnumber() {
	var results = [];
	for (var i = 0; i < 40; i++) {
		var count = 0;
		var random = Math.floor(Math.random() * 10 + 1);
		for (var j = 0; j < random; j++) {
			count++;
		}
		results.push(count);
	}

	console.log(results);

	function getOccurrence(array, value) {
		var count = 0;
		array.forEach((v) => (v === value && count++));
		return count;
	}

	document.getElementById('RNGoutput1').innerHTML = getOccurrence(
		results,
		1
	);

		var c = document.getElementById("RNGblock1");
		var xyx = getOccurrence(results, 1);
		var ctx = c.getContext("2d");
			ctx.fillStyle = "#FF0000";
			ctx.fillRect(20, 20, 25, (xyx *25));

	}
	


function reset() {

	if (document.getElementById("RNGcolumn").style.display == "flex") {
	document.getElementById("RNGcolumn").style.display = "none";

	} else {
		{
			document.getElementById("RNGcolumn").style.display = "flex";

		}
	}

}
