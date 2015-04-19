#pragma strict

var colorStart : Color;
var colorEnd : Color;
var duration : float;
private var done = false;

function FadeIn () {
	for (var t = 0.0; t < duration; t += Time.deltaTime) {
		GetComponent.<Renderer>().material.color = Color.Lerp (colorStart, colorEnd, t/duration);
		yield;
	}
	done = true;
}
 
 function FadeOut(){
	 Destroy(gameObject,duration);
	for (var t = 0.0; t < duration; t += Time.deltaTime) {
		GetComponent.<Renderer>().material.color = Color.Lerp (colorEnd, colorStart, t/duration);
		yield;
	}
 }
 
function Update() {
	if (!done){
		if (Input.GetKey("w")) FadeIn();
	}
	else  {
		FadeOut();
	}
}