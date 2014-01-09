var phrases = [
	"Bonjour",
	"<iframe src='http://anthonypigeot.com' class='big' />",
	"Au revoir",
	"<img src='http://www.w3schools.com/images/compatible_ie.gif' />",
	"TMTC BESTAH LAULXDPTDRLOL",
	"<a href='http://www.youtube.com/watch?v=dQw4w9WgXcQ'>Porn</a>"
];
var animTime = 3000;
var counter  = 0;
function appear () {
	counter++;
	counter %= phrases.length;
	$('#bidule').html(phrases[counter]);
	$('#bidule').addClass('visible');
	$('#bidule').removeClass('invisible');
	setTimeout (function () {
		disappear();
	}, animTime);
}
function disappear () {
	$('#bidule').removeClass('visible');
	$('#bidule').addClass('invisible');
	setTimeout (function () {
		appear();
	}, animTime);
}
appear();