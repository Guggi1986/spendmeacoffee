var currentLocation = window.location.href;
var menuItem = document.querySelectorAll('.mainMenu a');
var menuLength = menuItem.length;
for (var i = 0; i < menuLength; i++) {
if (menuItem[i].href === currentLocation) {
menuItem[i].className = "active";
}
}