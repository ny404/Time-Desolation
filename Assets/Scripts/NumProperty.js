#pragma strict

var target : GameObject;
private var spawned  : boolean;

function Start () {
	iTween.FadeFrom(gameObject,0,2);
	GetComponent(ScaleProperty).SetSize();
	spawned = true;
}

function Update () {
	if(spawned) {
		//transform.LookAt(target.transform.position);
		GetComponent(WaitDestroy).WaitAndDie();
	}
	//if(spawned) SetAnim();

}