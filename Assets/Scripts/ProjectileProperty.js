#pragma strict

function Start () {
	Scale();
}

function Scale() {
	GetComponent(ScaleProperty).SetSize();
}