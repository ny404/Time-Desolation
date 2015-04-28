#pragma strict

var spawnNext  : GameObject;
//var XCoordinate : float;
var YCoordinate : float;
var ZCoordinate : float;
private var passed = false;

//Once triggered, call spawn function
function OnTriggerEnter(hit : Collider){ 
	Spawn();
}

//Generates a new set of stairs and removes script afterwards
function Spawn () { 
	Instantiate(spawnNext, Vector3(0,transform.position.y+YCoordinate,transform.position.z+ZCoordinate), Quaternion.identity);
	Destroy(this);
}