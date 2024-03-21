// ----------------------------------------------------------------------------------- информация
document.getElementById('ID_00001').onclick = function() {
    if(document.getElementById('ID_00001In').style.visibility == "hidden") {
        document.getElementById('ID_00001In').style.visibility = "visible";
        document.getElementById('ID_00001In').innerHTML = " <b>&nbsp;&nbsp; ( <i>Информация</i> — (что-то известное) ) &nbsp;&nbsp;</b> ";
    } else {
        document.getElementById('ID_00001In').style.visibility = "hidden";
        document.getElementById('ID_00001In').innerHTML = "";
    }
}
// ----------------------------------------------------------------------------------- зарегистрированный
document.getElementById('ID_00002').onclick = function() {
    if(document.getElementById('ID_00002In').style.visibility == "hidden") {
        document.getElementById('ID_00002In').style.visibility = "visible";
        document.getElementById('ID_00002In').innerHTML = " <b>&nbsp;&nbsp; ( <i>Зарегистрировать</i> — (записать или типо того) ) &nbsp;&nbsp;</b> ";
    } else {
        document.getElementById('ID_00002In').style.visibility = "hidden";
        document.getElementById('ID_00002In').innerHTML = "";
    }
}