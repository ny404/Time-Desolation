var material1 : Material;
var material2 : Material;
var duration = 2.0;
var rend: Renderer;


function Start () {
	rend = GetComponent.<Renderer>();
	
	// At start, use the first material
	rend.material = material1;
}


function Update () {
	// ping-pong between the materials over the duration
	var lerp : float = Mathf.PingPong(Time.time, duration) / duration;
	rend.material.Lerp(material1, material2, lerp);
}