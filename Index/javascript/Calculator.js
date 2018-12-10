// This small piece of JavaScript will take user input and
// convert it to Hex,Dec,Bin and Oct values.

function inputBcheck(b, value) {
	var unicode = b.charCode
		? b.charCode
		: b.keyCode;
	if (value.indexOf(".") != -1)
		if (unicode == 46)
			return false;
if (unicode != 8)
		if ((unicode < 48 || unicode > 49))
			return false;
		}
	function inputDcheck(d, value) {
	var unicode = d.charCode
		? d.charCode
		: d.keyCode;
	if (value.indexOf(".") != -1)
		if (unicode == 46)
			return false;
if (unicode != 8)
		if ((unicode < 48 || unicode > 57))
			return false;
		}
	function inputOcheck(o, value) {
	var unicode = o.charCode
		? o.charCode
		: o.keyCode;
	if (unicode != 8)
		if (unicode < 48 || unicode > 55)
			return false;
		}
	function inputHcheck(h, value) {
	var unicode = h.charCode
		? h.charCode
		: h.keyCode;
	if (value.indexOf(".") != -1)
		if (unicode == 46)
			return false;
if (unicode != 8)
		if ((unicode < 48 || unicode > 57) && (unicode < 65 || unicode > 70) && (unicode < 97 || unicode > 102))
			return false;
		}

function convHEXvalue(source, valNum) {

	var inputHEX = document.getElementById("inputH");
	var outputBIN = document.getElementById("convBIN");
	var outputHEX = document.getElementById("convHEX");
	var outputDEC = document.getElementById("convDEC");
	var outputOCT = document.getElementById("convOCT");

	outputBIN.value = (parseInt(valNum, 16).toString(2));
	outputDEC.value = (parseInt(valNum, 16));
	outputOCT.value = (parseInt(valNum, 16).toString(8));
	outputHEX.value = NaN;

}
function convBINvalue(source, valNum) {

	var inputBIN = document.getElementById("inputB");
	var outputBIN = document.getElementById("convBIN");
	var outputHEX = document.getElementById("convHEX");
	var outputDEC = document.getElementById("convDEC");
	var outputOCT = document.getElementById("convOCT");

	outputBIN.value = NaN;
	outputDEC.value = (parseInt(valNum, 2));
	outputOCT.value = (parseInt(valNum, 2).toString(8));
	outputHEX.value = (parseInt(valNum, 2).toString(16).toUpperCase());

}
function convDECvalue(source, valNum) {

	var inputBIN = document.getElementById("inputB");
	var outputBIN = document.getElementById("convBIN");
	var outputHEX = document.getElementById("convHEX");
	var outputDEC = document.getElementById("convDEC");
	var outputOCT = document.getElementById("convOCT");

	outputBIN.value = (parseInt(valNum, 10).toString(2));
	outputDEC.value = NaN;
	outputOCT.value = (parseInt(valNum, 10).toString(8));
	outputHEX.value = (parseInt(valNum, 10).toString(16).toUpperCase());

}
function convOCTvalue(source, valNum) {

	var inputBIN = document.getElementById("inputB");
	var outputBIN = document.getElementById("convBIN");
	var outputHEX = document.getElementById("convHEX");
	var outputDEC = document.getElementById("convDEC");
	var outputOCT = document.getElementById("convOCT");

	outputBIN.value = (parseInt(valNum, 8).toString(2));
	outputDEC.value = (parseInt(valNum, 8).toString(10));
	outputOCT.value = NaN;
	outputHEX.value = (parseInt(valNum, 8).toString(16).toUpperCase());

}

/*function checkLength()
{
    var fieldLength = document.getElementById('txtF').value.length;
    //Suppose u want 4 number of character
    if(fieldLength <= 4){
        return true;
    }
    else
    {
        var str = document.getElementById('txtF').value;
        str = str.substring(0, str.length - 1);
        document.getElementById('txtF').value = str;
    }
}*/
