#pragma strict

// Generates an object every time offset. Once the maximum number of objects are reached, disable the script.

var prefab : GameObject;
//var minOffset : float;
//var maxOffset : float;
var amount : int = 20;
var xRadius : float = 5;
var zRadius : float = 5;
var timeOffset  : float = 5;

private var timer = 0.0;
private var count = 0;
private var randX : float;
private var randZ : float;

function Update () {
	//if (Input.anyKey) InvokeRepeating ("Generate", timeOffset, timeOffset);
	timer += Time.deltaTime;
	if (Input.anyKey && timer >= timeOffset) Generate();
	if (count >= amount) {
		this.enabled = false;
		return;
	}
	print (count);
 }

function Generate () {
	//randX = Random.Range(minOffset,maxOffset);
	//randZ = Random.Range(minOffset,maxOffset);
	//Instantiate(prefab, Vector3(transform.position.x - randX, transform.position.y ,  transform.position.z + randZ), Quaternion.Euler(-90, 0, 0));
	Instantiate(prefab, Vector3(Random.insideUnitSphere.x * xRadius + transform.position.x, transform.position.y, Random.insideUnitSphere.z * zRadius + transform.position.z), Quaternion.Euler(-90, 0, 0));
	timer = 0;
	count += 1;
}

