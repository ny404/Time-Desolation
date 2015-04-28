#pragma strict

var target : GameObject;
private var distFromTarget : float;

function Start () {
}

function Update () {
	print (distFromTarget);
	distFromTarget = transform.position.z - target.transform.position.z;
	if (distFromTarget < 20 ) {
		GetComponent(SpawnObject).Spawn();
		
	}
}