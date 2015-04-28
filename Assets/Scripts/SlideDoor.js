#pragma strict

//var LeftDoor : boolean;
//var RightDoor: boolean;
var speed : float = 0.0;
var initialPosition : Vector3;

function OnCollisionEnter(Collision) {
	initialPosition= transform.position;
}

function SlideLeft(){
	transform.Translate(Vector3(-speed*Time.deltaTime,0,0));
}

function SlideRight(){
	transform.Translate(Vector3(speed*Time.deltaTime,0,0));
}

function SlideBack(){
	transform.position = Vector3.MoveTowards(transform.position, initialPosition, speed*Time.deltaTime);
}

/*function Update () {
	if(LeftDoor) GetComponent(SlideDoor).SlideLeft();
	if(RightDoor) GetComponent(SlideDoor).SlideRight();
}*/