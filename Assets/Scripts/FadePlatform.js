#pragma strict

var target  : GameObject;
private var stepped = false;

function OnTriggerEnter (hit : Collider) {
	stepped = true;
}

function OnTriggerStay (hit : Collider){
	iTween.FadeTo(target,0,2);
	if (stepped) {
		if(target.GetComponent.<Renderer>().material.color.a == 0) GetComponent(TrigDestroy).Die(target);
	}
	print (target.GetComponent.<Renderer>().material.color.a);
}

function OnTriggerExit (hit : Collider){
	
}

/*function die(){
	Destroy(target);
}*/

function  die() {
	GetComponent(TrigDestroy).Die(target);
}