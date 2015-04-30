#pragma strict

var prefab : GameObject;
private var triggered = false;

function OnTriggerEnter (hit : Collider){
	if (hit.gameObject.tag == "Player" && !triggered){
		Instantiate(prefab, Vector3(transform.position.x, transform.position.y-10, transform.position.z), Quaternion.identity);
		triggered = true;
	}
}