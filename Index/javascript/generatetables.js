function generate_table()
{
  var table_element = document.getElementById("table_id");
  var table_content = "<tr><th>A</th><th>B</th><th>Result</th></tr>";
  var multiplicant = 3;
  for (var i = i; i<=10; i ++)
  {
    var result = i + multiplicant ;
    table_content += "<tr><td>" + i + "</td><td>" + multiplicant + "</td><td>" + result + "</td></tr>";
  }
  table_element.innerHTML = table_content
}
 // body onload="generate_table()" table id=table_id class=centered
