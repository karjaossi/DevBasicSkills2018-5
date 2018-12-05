function randomnumber()
{
  var arr = []
  while(arr.length < 30){
    var r = Math.floor(Math.random()*2) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
  }
  document.getElementById('RNGoutput').innerHTML = arr;
}
