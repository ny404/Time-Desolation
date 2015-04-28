#pragma strict

var LeftDoor : GameObject;
var RightDoor : GameObject;
private var loaded : boolean = false;
private var triggered : boolean = false;

function OnTriggerEnter (hit : Collider){
	if(hit.gameObject.tag == "Player") triggered = true;
}

function OnTriggerExit (hit : Collider) {
	if(hit.gameObject.tag == "Player" ) {
		loaded = true;
		triggered = false;
	}
}

function Update () {
	transform.position = LeftDoor.transform.position;
	if(triggered && Input.anyKey){
		LeftDoor.GetComponent(SlideDoor).SlideLeft();
		RightDoor.GetComponent(SlideDoor).SlideRight();
	}
	if(!triggered && loaded && Input.anyKey){
		LeftDoor.GetComponent(SlideDoor).SlideBack();
		RightDoor.GetComponent(SlideDoor).SlideBack();
	}
}