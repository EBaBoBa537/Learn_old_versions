// =============================================================================================== menu_button

document.getElementById('menu_button_ID').onmouseenter = function() {
    document.getElementById('menu_ID').style = "height: 400px;   border-bottom-width: 5px;";
}
document.getElementById('menu_ID').onmouseenter = function() {
    document.getElementById('menu_ID').style = "height: 400px;   border-bottom-width: 5px;";
}

document.getElementById('menu_button_ID').onmouseleave = function() {
    document.getElementById('menu_ID').style = "height: 0px;   border-bottom-width: 0px;";
}
document.getElementById('menu_ID').onmouseleave = function() {
    document.getElementById('menu_ID').style = "height: 0px;   border-bottom-width: 0px;";
}



// ----------------------------------------------------------------------------------- level_1_button
document.getElementById('lvl_1_button_ID').onmouseenter = function() {
    document.getElementById('lvl_1_button_ID').style = "background: linear-gradient(to right, rgb(33,33,33) 0%, rgb(55,55,55) 100%);";
    document.getElementById('lvl_1_ID').style = "visibility: visible;";
    document.getElementById('lvl_2_ID').style = "visibility: hidden;";
    document.getElementById('lvl_3_ID').style = "visibility: hidden;";
}
document.getElementById('lvl_1_button_ID').onmouseleave = function() {
    document.getElementById('lvl_1_button_ID').style = "background-color: rgb(33,33,33);";
}

// ----------------------------------------------------------------------------------- level_2_button
document.getElementById('lvl_2_button_ID').onmouseenter = function() {
    document.getElementById('lvl_2_button_ID').style = "background: linear-gradient(to right, rgb(33,33,33) 0%, rgb(55,55,55) 100%);";
    document.getElementById('lvl_1_ID').style = "visibility: hidden;";
    document.getElementById('lvl_2_ID').style = "visibility: visible;";
    document.getElementById('lvl_3_ID').style = "visibility: hidden;";
}
document.getElementById('lvl_2_button_ID').onmouseleave = function() {
    document.getElementById('lvl_2_button_ID').style = "background-color: rgb(33,33,33);";
}

// ----------------------------------------------------------------------------------- level_3_button
document.getElementById('lvl_3_button_ID').onmouseenter = function() {
    document.getElementById('lvl_3_button_ID').style = "background: linear-gradient(to right, rgb(33,33,33) 0%, rgb(55,55,55) 100%);";
    document.getElementById('lvl_1_ID').style = "visibility: hidden;";
    document.getElementById('lvl_2_ID').style = "visibility: hidden;";
    document.getElementById('lvl_3_ID').style = "visibility: visible;";
}
document.getElementById('lvl_3_button_ID').onmouseleave = function() {
    document.getElementById('lvl_3_button_ID').style = "background-color: rgb(33,33,33);";
}



// =============================================================================================== settings
document.getElementById('settings_ID').onmouseenter = function() {
    document.getElementById('settings_ID').style.height = "300px";
    document.getElementById('settings_ID').style.backgroundColor = "rgb(33, 33, 33)";
    document.getElementById('settings_ID').style.border = "5px solid #80ABC4";
    document.getElementById('settings_ID').style.borderTop = "none";
}
document.getElementById('settings_ID').onmouseleave = function() {
    document.getElementById('settings_ID').style.height = "0px";
    document.getElementById('settings_ID').style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById('settings_ID').style.border = "5px solid rgba(0, 0, 0, 0)";
    document.getElementById('settings_ID').style.borderTop = "none";
}



// =============================================================================================== navigation
if(scrollY < 290) {
    document.getElementById('nav_ID').style = "margin-top: " + String(290 - scrollY) + "px;";
} else {
    document.getElementById('nav_ID').style = "margin-top: 0px ;";
}

document.onscroll = function() { 
    if(scrollY < 290) {
        document.getElementById('nav_ID').style = "margin-top: " + String(290 - scrollY) + "px;";
    } else {
        document.getElementById('nav_ID').style = "margin-top: 0px ;";
    }
}

document.getElementById('nav_ID').onclick = function() {
    document.getElementById('nav_ID').style.width = "0px";
}



document.getElementById('nav_ID').onmouseenter = function() {
    document.getElementById('nav_ID').style.width = "300px";
    document.getElementById('nav_ID').style.borderRight = "5px solid #80ABC4";
    document.getElementById('nav_ID').style.backgroundColor = "rgb(33, 33, 33)";
    document.getElementById('nav_ID').style.color = "rgb(255, 255, 255)";
    // document.getElementById('nav_ID').style = "width: 300px;   border-right: 5px solid #80ABC4;   background-color: rgb(33, 33, 33);   color: rgb(255, 255, 255);";
}
document.getElementById('nav_ID').onmouseleave = function() {
    document.getElementById('nav_ID').style.width = "1px";
    document.getElementById('nav_ID').style.borderRight = "20px solid rgba(0, 0, 0, 0)";
    document.getElementById('nav_ID').style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById('nav_ID').style.color = "rgba(0, 0, 0, 0)";
    // document.getElementById('nav_ID').style = "width: 1px;   border-right: 20px solid rgba(0, 0, 0, 0);   background-color: rgba(0, 0, 0, 0);   color:rgba(0, 0, 0, 0);";
}




// =============================================================================================== toBegin_button
document.getElementById('toBegin_button_ID').onmouseenter = function() {
    document.getElementById('toBegin_button_ID').style.color = "rgb(255, 255, 255)";
    document.getElementById('toBegin_button_ID').style.backgroundColor = "rgb(33, 33, 33)";
    document.getElementById('toBegin_button_ID').style.border = "4px solid #80ABC4";
}
document.getElementById('toBegin_button_ID').onmouseleave = function() {
    document.getElementById('toBegin_button_ID').style.color = "rgba(0, 0, 0, 0)";
    document.getElementById('toBegin_button_ID').style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById('toBegin_button_ID').style.border = "4px solid rgba(0, 0, 0, 0)";
}
