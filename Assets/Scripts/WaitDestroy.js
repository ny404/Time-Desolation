#pragma strict

var min : float;
var max : float;
private var timer : float;

function Start(){
	timer = Random.Range(min,max);
	print("Death timer: " + timer);
}

function WaitAndDie() {
	Destroy (gameObject,timer*Time.deltaTime);
}