#pragma strict
var fadeSpeed : float = 1.5;  

function FadeToBlack ()
{
    // Lerp the colour of the texture between itself and black.
    GetComponent.<GUITexture>().color = Color.Lerp(GetComponent.<GUITexture>().color, Color.black, fadeSpeed * Time.deltaTime);
}
function Update () {
	FadeToBlack();
}