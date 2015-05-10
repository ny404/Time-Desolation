#pragma strict

var speed : int = 5;

function Start() {
	transform.rotation = Random.rotation;
}

function Update () {
	transform.Rotate(speed*Time.deltaTime, speed*Time.deltaTime, speed*Time.deltaTime);
}