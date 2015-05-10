#pragma strict

var speed : float = 5;
private var death = 0.0;

function Update () {
	death += Time.deltaTime;
	transform.Translate(Vector3(0,0,-speed*Time.deltaTime));
	if (transform.position.z <= 0 || transform.position.y <= -100 || death >= 10) Destroy(gameObject);
}