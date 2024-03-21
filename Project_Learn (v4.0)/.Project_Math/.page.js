// стрелка меню
document.getElementById('menu_id').onmouseenter = function() {
    document.getElementById('arrow_id').innerHTML = "Содержание <b>▲</b>";
}
document.getElementById('menu_id').onmouseleave = function() {
    document.getElementById('arrow_id').innerHTML = "Содержание <b>▼</b>";
}