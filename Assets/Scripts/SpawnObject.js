#pragma strict

var spawnNext : GameObject;
var YCoordinate : float;
var ZCoordinate : float;

function Spawn () { 
	print("Spawned");
	Instantiate(spawnNext, Vector3(0,transform.position.y+YCoordinate,transform.position.z+ZCoordinate), Quaternion.identity);
}