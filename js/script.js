var show = false;
var selectColor = '#E0E0E0';
var lastID = 0;
function showMenu(iconID) {
	if (iconID == lastID) {
		document.getElementById('menu-wrapper').style.height = "0";
		document.getElementById(iconID).style.background = 'transparent';
		lastID = 0;
	} else {
		document.getElementById('menu-wrapper').style.height = "96px";
		if (lastID !== 0) {document.getElementById(lastID).style.background = 'transparent';}
		document.getElementById(iconID).style.background = selectColor;
		lastID = iconID;
	}
	
	document.getElementById('load-icon').src = xmlDoc.getElementsByTagName("svgpath")[iconID-1].childNodes[0].nodeValue;
	document.getElementById('load-name').innerHTML = xmlDoc.getElementsByTagName("name")[iconID-1].childNodes[0].nodeValue;
	document.getElementsByClassName('load')[0].href = xmlDoc.getElementsByTagName("svgpath")[iconID-1].childNodes[0].nodeValue;
	document.getElementsByClassName('load')[1].href = xmlDoc.getElementsByTagName("pngpath")[iconID-1].childNodes[0].nodeValue;
};
