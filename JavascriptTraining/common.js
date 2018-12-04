function $(id) {
	return document.getElementById(id);
}

function onElementClick(id, callMe) {
	alert('test');
	$(id).addEventListener('click', callMe);
}