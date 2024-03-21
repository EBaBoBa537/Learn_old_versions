if(scrollY < 338) {
    document.getElementById('leftMenu_ID').style = "margin-top: " + String(338 - scrollY) + "px;";
    document.getElementById('toBegin_ID').style.visibility = "hidden";
} else {
    document.getElementById('leftMenu_ID').style = "margin-top: 0px ;";
    document.getElementById('toBegin_ID').style.visibility = "visible";
}

// if(scrollY > 0) {
//     document.getElementById('toBegin_ID').style.visibility = "visible";
// } else {
//     document.getElementById('toBegin_ID').style.visibility = "hidden";
// }


document.onscroll = function() { 
    if(scrollY < 338) {
        document.getElementById('leftMenu_ID').style = "margin-top: " + String(338 - scrollY) + "px;";
        document.getElementById('toBegin_ID').style.visibility = "hidden";
    } else {
        document.getElementById('leftMenu_ID').style = "margin-top: 0px ;";
        document.getElementById('toBegin_ID').style.visibility = "visible";
    }
}


