#pragma strict

var target : GameObject;
private var distFromTarget : float;

function Start () {
	distFromTarget = transform.position.z - target.transform.position.z;
}

function Update () {
	print (distFromTarget);
	if (distFromTarget < 20 ) {
		GetComponent(SpawnObject).Spawn();
		
	}
}