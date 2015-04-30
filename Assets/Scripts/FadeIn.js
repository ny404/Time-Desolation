#pragma strict

// Fade In Object

var colorStart : Color;
var colorEnd : Color;
var duration : float = 5;
var randomizeColor : boolean;

function Awake() {
	if (randomizeColor) colorEnd = new Color(Random.value, Random.value, Random.value);
}

function Start() {
	if (randomizeColor) colorEnd = new Color(Random.value, Random.value, Random.value);
	for (var t = 0.0; t < duration; t += Time.deltaTime) {
		GetComponent.<Renderer>().material.color = Color.Lerp (colorStart, colorEnd, t/ duration);
		yield;
	}
}