#pragma strict

var doors : GameObject[];
var yOffset : float = 0;
var zOffset : float = 50;
var timeOffset : float = 2;
private var zOffsetcopy : float = zOffset;

function Start () {
	for (var i = 0.0; i < doors.length; i ++){
		Instantiate(doors[i], Vector3(0,transform.position.y+yOffset,transform.position.z+zOffset), Quaternion.identity);
		zOffset -= zOffsetcopy;
		yield WaitForSeconds  (timeOffset);
	}
}