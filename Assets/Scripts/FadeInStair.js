#pragma strict

var colorStart : Color;
var colorEnd : Color;
var fadeinDuration : float;
var fadeoutDuration : float;
private var done = false;

function FadeIn () {
	for (var t = 0.0; t < fadeinDuration; t += Time.deltaTime) {
		GetComponent.<Renderer>().material.color = Color.Lerp (colorStart, colorEnd, t/ fadeinDuration);
		yield;
	}
	done = true;
}
 
 function FadeOut(){
	 yield WaitForSeconds(fadeoutDuration);
	 Destroy(gameObject,fadeoutDuration);
	for (var t = 0.0; t < fadeoutDuration; t += Time.deltaTime) {
		GetComponent.<Renderer>().material.color = Color.Lerp (colorEnd, colorStart, t/fadeoutDuration);
		yield;
	}
 }
 
function Update() {
	if (!done){
		if (Input.anyKey ) FadeIn();
	}
	else  {
		if (Input.anyKey || Input.GetAxis("Mouse X") || Input.GetAxis("Mouse Y"))  FadeOut();
	}
}