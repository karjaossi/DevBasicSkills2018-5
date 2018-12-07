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
  document.getElementById('RNGoutput1').innerHTML = getOccurrence(results, 1);
  document.getElementById('RNGoutput2').innerHTML = getOccurrence(results, 2);
  document.getElementById('RNGoutput3').innerHTML = getOccurrence(results, 3);
  document.getElementById('RNGoutput4').innerHTML = getOccurrence(results, 4);
  document.getElementById('RNGoutput5').innerHTML = getOccurrence(results, 5);
  document.getElementById('RNGoutput6').innerHTML = getOccurrence(results, 6);
  document.getElementById('RNGoutput7').innerHTML = getOccurrence(results, 7);
  document.getElementById('RNGoutput8').innerHTML = getOccurrence(results, 8);
  document.getElementById('RNGoutput9').innerHTML = getOccurrence(results, 9);
  document.getElementById('RNGoutput10').innerHTML = getOccurrence(results, 10);
}
