#pragma strict

//var sceneIndex : int;;
var player : GameObject;
private var timer = 0.0;

//Required for loading scripts
var loadDoor : float = 30; 
var loadTreeSpawner : float = 60;

function Start () {
	//Application.LoadLevelAdditive (sceneIndex);
	//if(!player.GetComponent.<CharacterController>().isGrounded)  {}
		//player.GetComponent(FirstPersonController).enabled = false;
		//player.GetComponent.<Rigidbody>().constraints = RigidbodyConstraints.FreezeAll;
}

function Update(){
	print (timer);
	if (timer< loadDoor && (Input.anyKey || Input.GetAxis("Mouse X") || Input.GetAxis("Mouse Y"))) timer += Time.deltaTime;
	if (timer >= loadDoor) GetComponent(DropDoors).enabled = true;
	if (timer >= loadTreeSpawner) {}
}