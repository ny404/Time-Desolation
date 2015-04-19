#pragma strict

var spawnNext  : GameObject;
private var passed = false;

//Once triggered, call spawn function
function OnTriggerEnter(hit : Collider){ 
	Spawn();
}

//Generates a new set of stairs and removes script afterwards
function Spawn () { 
	Instantiate(spawnNext, Vector3(0,transform.position.y-2,transform.position.z+2), Quaternion.identity);
	Destroy(this);
	//return spawnNext;
}