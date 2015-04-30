#pragma strict

var cameraTarget : GameObject;
var newColor : Color;
var duration : float;

private var isChanged = false;
private var objColor : Color;

function Start() {
	objColor = cameraTarget.GetComponent.<Camera>().main.backgroundColor;
	print (objColor);
}
 
function changeColor () {
	for (var t = 0.0; t < duration; t += Time.deltaTime) {
		cameraTarget.GetComponent.<Camera>().main.backgroundColor  = Color.Lerp(objColor, newColor, t/duration);
		yield;
	}
	isChanged = true;
    //cameraTarget.GetComponent.<Camera>().main.backgroundColor = newColor;
}

function Update(){
	if (isChanged) {
		GetComponent(ResetLevel).Reset();
	}
}