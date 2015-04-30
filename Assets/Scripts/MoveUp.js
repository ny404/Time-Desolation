#pragma strict

var prefab : GameObject;
var prefabOffset : float = 200;

var speed : float = 5.0;
var reach : float = 500;

private var isSpawned = false;

function SpawnFinal() {
	Instantiate(prefab,Vector3(transform.position.x,transform.position.y,transform.position.z+prefabOffset),Quaternion.identity);
	isSpawned = true;
}

function Update () {
	if(!isSpawned){
		transform.Translate(Vector3(0,speed*Time.deltaTime,0));
		if (transform.position.y >= reach){
			transform.position.y = reach;
			SpawnFinal();
		}
	}
}