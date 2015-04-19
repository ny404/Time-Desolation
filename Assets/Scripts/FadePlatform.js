#pragma strict

var target  : GameObject;
var duration: float;
private var stepped = false;

function OnTriggerEnter (hit : Collider) {
	stepped = true;
}

function Update(){
	if (stepped) iTween.FadeTo(target,0,duration);
	if(target.GetComponent.<Renderer>().material.color.a == 0) GetComponent(TrigDestroy).Die(target);
	//print (target.GetComponent.<Renderer>().material.color.a);
}

/*function die(){
	Destroy(target);
}*/