#pragma strict

var spawnNext  : GameObject;
private var passed = false;

function OnTriggerEnter(){
	Spawn();
}

function Spawn () {
	Instantiate(spawnNext, Vector3(0,transform.position.y-2,transform.position.z+2), Quaternion.identity);
	//return spawnNext;
}