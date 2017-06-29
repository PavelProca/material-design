var show = false;
var selectColor = '#E0E0E0';
var lastID = 0;
function showMenu(iconID) {
	if (iconID == lastID) {
		document.getElementById('menu-wrapper').style.height = "0";
		document.getElementsByClassName('ic-block')[lastID-1].style.background = 'transparent';
		lastID = 0;
	} else {
		document.getElementById('menu-wrapper').style.height = "96px";
		if (lastID !== 0) {document.getElementsByClassName('ic-block')[lastID-1].style.background = 'transparent';}
		document.getElementsByClassName('ic-block')[iconID-1].style.background = selectColor;
		lastID = iconID;
	}
	switch (iconID) {
		case 1:
			document.getElementById('load-icon').src = 'png/icon1.png';
			document.getElementById('load-name').innerHTML = 'First icon';
			document.getElementsByClassName('load')[0].href = 'svg/icon1.svg';
			document.getElementsByClassName('load')[1].href = 'png/icon1.png';
			break;
		case 2:
			document.getElementById('load-icon').src = 'png/icon2.png';
			document.getElementById('load-name').innerHTML = 'Second icon';
			document.getElementsByClassName('load')[0].href = 'svg/icon2.svg';
			document.getElementsByClassName('load')[1].href = 'png/icon2.png';
			break;
		case 3:
			document.getElementById('load-icon').src = 'png/icon3.png';
			document.getElementById('load-name').innerHTML = 'Third icon';
			document.getElementsByClassName('load')[0].href = 'svg/icon3.svg';
			document.getElementsByClassName('load')[1].href = 'png/icon3.png';
			break;
		default: return;
	}
}