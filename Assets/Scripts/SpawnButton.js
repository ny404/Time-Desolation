#pragma strict

// Generates an object every time offset. Once the maximum number of objects are reached, disable the script.

var prefab : GameObject;
var zRadius : float = 5;
private var spawned = false;

function Generate () {
	Instantiate(prefab, Vector3(transform.position.x, prefab.transform.position.y, Random.insideUnitSphere.z * zRadius + transform.position.z), Quaternion.identity);
	spawned = true;
}

function Update () {
	if (!spawned) Generate();
	if (this == null) return;
}
