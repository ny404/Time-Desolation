#pragma strict

var player : GameObject;
var YCoordinateSpawn : float;
//var distToGround: float;
 
 function Start(){
   // get the distance to ground
   //distToGround = GetComponent.<Collider>().bounds.extents.y;
 }
 
 function IsGrounded(): boolean {
   return Physics.Raycast(transform.position, -Vector3.up,  0.1);
 }
 
 function Update () {
	if((!player.GetComponent.<CharacterController>().isGrounded) && player.transform.position.y <= YCoordinateSpawn) GetComponent(NumManager).Generate();
 }