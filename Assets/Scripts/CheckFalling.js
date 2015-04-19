#pragma strict

var player : GameObject;
//var distToGround: float;
 
 function Start(){
   // get the distance to ground
   //distToGround = GetComponent.<Collider>().bounds.extents.y;
 }
 
 /*function IsGrounded(): boolean {
   return Physics.Raycast(transform.position, -Vector3.up, distToGround + 0.1);
 }*/
 
 function Update () {
   //if (player.GetComponent.<Rigidbody>().velocity.y < 0 ){
	if(!player.GetComponent.<CharacterController>().isGrounded) print ("falling");
	else  print ("grounded");
 }