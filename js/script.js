var show = false;
var lastID = 0;
function showMenu(iconID) {
	if (iconID == lastID) {
		document.getElementById('menu-wrapper').style.height = "0";
		lastID = 0;
	} else {
		document.getElementById('menu-wrapper').style.height = "64px";
		lastID = iconID;
	}
	switch (iconID) {
		case 1:
			document.getElementById('load-icon').src = 'png/icon1.png';
			document.getElementById('load-name').innerHTML = 'First icon';
			document.getElementById('load').href = 'png/icon1.png';
			break;
		case 2:
			document.getElementById('load-icon').src = 'png/icon2.png';
			document.getElementById('load-name').innerHTML = 'Second icon';
			document.getElementById('load').href = 'png/icon2.png';
			break;
		case 3:
			document.getElementById('load-icon').src = 'png/icon3.png';
			document.getElementById('load-name').innerHTML = 'Third icon';
			document.getElementById('load').href = 'png/icon3.png';
			break;
		default: return;
	}
}