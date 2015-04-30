#pragma strict

//var sceneIndex : int;;
var player : GameObject;
var aliveFor : float = 5.0;

private var playerDeath = 0.0;
private var timer = 0.0;

var coveredDistance : float = 200;
var coveredDistanceForButton : float = 300;

//Required for loading scripts
var loadDoor : float = 30; 
var loadTreeSpawner : float = 90;
var loadButton : float = 120;

function Start () {
	//Application.LoadLevelAdditive (sceneIndex);
	//if(!player.GetComponent.<CharacterController>().isGrounded)  {}
		//player.GetComponent(FirstPersonController).enabled = false;
		//player.GetComponent.<Rigidbody>().constraints = RigidbodyConstraints.FreezeAll;
}

function Update(){
	print (timer);
	if (!player.GetComponent.<CharacterController>().isGrounded ){
		print (playerDeath);
		playerDeath += Time.deltaTime;
		if (playerDeath >= aliveFor) GetComponent(ResetLevel).Reset();
	}
	if (player.GetComponent.<CharacterController>().isGrounded ) playerDeath = 0;
	if (Input.anyKey) timer += Time.deltaTime;
	if (timer >= loadDoor) GetComponent(DropDoors).enabled = true;
	if (timer >= loadTreeSpawner && player.transform.position.z >= coveredDistance) GetComponent(SpawnTree).enabled = true;
	if (timer >= loadButton) {
		GetComponent(SpawnTree).enabled = false;
		if (player.transform.position.z >= coveredDistanceForButton) GetComponent(SpawnButton).enabled = true;
	}
}