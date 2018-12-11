function conversionTableClear() {
  var table_element = document.getElementById(
		"conversionTable"
	);

	var table_content = "<tr><th>Table is now empty</th></tr>";


	table_element.innerHTML = table_content;

}

function conversionTableMake() {
	var table_element = document.getElementById(
		"conversionTable"
	);

	var table_content = "<tr><th>Decimal</th><th>Binary</th><th>Octal</th><th>Hexad" +
			"ecimal</th></tr>";

	var i = 0;

	for (let i = 0; i < 51; i++) {
		var hex = i.toString(16).toUpperCase(); // Hexidecimal
		var oct = i.toString(8); // Octal
		var bin = i.toString(2); // Binary

		table_content += "<tr><td>" + i + "</td><td>" + bin + "</td><td>" + oct + "<" +
				"/td><td>" + hex + "</td></tr>";
	}

	table_element.innerHTML = table_content;

}
