#pragma strict

var prefab : GameObject;
var FadeBackground : GameObject;
var cam : Camera;
private var isStarted : boolean = false;

function Start () {
	prefab.GetComponent(TrailRenderer).enabled = false;
}

function Update () {
	if (!isStarted) {
		if (Input.anyKey) {
			prefab.GetComponent(TrailRenderer).enabled = true;
			FadeBackground.GetComponent(fadetoBlackscreen).enabled = true;
			cam.transform.Rotate(Vector3(15*Time.deltaTime,0,0));
			if (cam.transform.eulerAngles.x >= 180) isStarted = true;
		}
	}
	if (isStarted) GetComponent(ResetLevel).Reset();
	

}