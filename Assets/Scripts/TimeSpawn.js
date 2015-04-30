#pragma strict

var prefab : GameObject;
var prefabOffset : float = 100;
var timeOffset : float = 10;
private var triggered = false;
private  var timer = 0.0;

function Spawn() {
	Instantiate(prefab,Vector3(transform.position.x,transform.position.y,transform.position.z+prefabOffset),Quaternion.identity);
	triggered = true;
}

function Update () {
	timer += Time.deltaTime;
	if (timer >= timeOffset && !triggered) Spawn();
}