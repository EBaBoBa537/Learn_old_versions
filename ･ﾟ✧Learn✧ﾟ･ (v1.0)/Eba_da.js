function setMenuVisible(menu){ menu.style.visibility = "visible"; }
function setMenuHidden(menu){ menu.style.visibility = "hidden"; } 

document.getElementById("text_1_ID").onmouseenter = function() { setMenuVisible(document.getElementById("menu_1_ID")); }
document.getElementById("menu_1_ID").onmouseenter = function() { setMenuVisible(document.getElementById("menu_1_ID")); }
document.getElementById("text_1_ID").onmouseleave = function() { setMenuHidden(document.getElementById("menu_1_ID")); }
document.getElementById("menu_1_ID").onmouseleave = function() { setMenuHidden(document.getElementById("menu_1_ID")); }

document.getElementById("text_2_ID").onmouseenter = function() { setMenuVisible(document.getElementById("menu_2_ID")); }
document.getElementById("menu_2_ID").onmouseenter = function() { setMenuVisible(document.getElementById("menu_2_ID")); }
document.getElementById("text_2_ID").onmouseleave = function() { setMenuHidden(document.getElementById("menu_2_ID")); }
document.getElementById("menu_2_ID").onmouseleave = function() { setMenuHidden(document.getElementById("menu_2_ID")); }

