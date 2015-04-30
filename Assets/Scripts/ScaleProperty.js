#pragma strict

var scaleMinFactor : float;
var scaleMaxFactor : float;

private var scaleSize : float;

function Start() {
	SetSize();
}

function SetSize () {
	scaleSize = Random.Range(scaleMinFactor, scaleMaxFactor);
	transform.localScale = Vector3(scaleSize,scaleSize,scaleSize);
}