#pragma strict

var scaleMinFactor : float;
var scaleMaxFactor : float;

private var scaleSize : float;

function SetSize () {
	scaleSize = Random.Range(scaleMinFactor, scaleMaxFactor);
	transform.localScale += new Vector3(scaleSize,scaleSize,scaleSize);
}