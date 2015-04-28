#pragma strict

var speed : float = 5.0;

function Update () {
	GetComponent.<Rigidbody>().velocity = Vector3(0,-speed, 0);
}