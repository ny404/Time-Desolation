#pragma strict

var minDistance : float;
var maxDistance : float;
var prefab : GameObject[];
private var randX : float;
private var randY : float;
private var randZ : float;
private var spawnRate : float;

function Start () {
	
}

function Generate () {
	for(var i = 0.0; i < prefab.length; i += Time.deltaTime){
		randX = Random.Range(minDistance,maxDistance);
		randY= Mathf.Abs(Random.Range(minDistance,maxDistance));
		randZ = Random.Range(minDistance,maxDistance);
		Instantiate(prefab[i], Vector3(transform.position.x - randX, transform.position.y - randY,  transform.position.z - randZ), Quaternion.identity);
		i++;
	}
}