// ----------------------------------------------------- меню -----------------------------------------------------

if(document.getElementById('menu_id').style.height < document.getElementById('content_id').style.height){
    document.getElementById('menu_id').style.height = document.getElementById('content_id').style.height;
} else {
    document.getElementById('content_id').style.height = document.getElementById('menu_id').style.height;
}

document.getElementById('menu_id').innerHTML = "<h5>Содержание</h5><a>Введение</a><br>";
document.getElementById('menu_id').innerHTML += "<h6>Алгебра</h6><a>числа</a><br><a>системы счисления</a><br><a>арифметические операции</a><br><a>выражения</a><br><a>числовые промежутки</a><br><a>уравнения</a><br><a>неравенства</a><br><a>функции</a><br>";
document.getElementById('menu_id').innerHTML += "<h6>Геометрия</h6><a>точка, прямая, плоскость</a><br><a>окружность</a><br><a>треугольник</a><br><a>четырехугольник</a><br>";
document.getElementById('menu_id').innerHTML += "<h6>Математическая логика</h6><a>высказывания</a><br><a>множества</a><br>";
document.getElementById('menu_id').innerHTML += "<h6>Теория вероятности</h6><a>вероятность</a><br>";
document.getElementById('menu_id').innerHTML += "<h6>Линейная алгебра</h6><a>векторы</a><br><a>матрицы</a><br>";
document.getElementById('menu_id').innerHTML += "<h6>Математический анализ</h6><a>производные</a><br><a>пределы</a><br><a>интегралы</a><br>";
document.getElementById('menu_id').innerHTML += "<a>Источники</a><br>";
// введение
document.getElementById('menu_id').getElementsByTagName('a')[0].href = "vvedenie.html";
// алгебра
document.getElementById('menu_id').getElementsByTagName('a')[1].href = "algebra_numbers.html";
document.getElementById('menu_id').getElementsByTagName('a')[2].href = "algebra_numbersystems.html";
document.getElementById('menu_id').getElementsByTagName('a')[3].href = "algebra_operations.html";
document.getElementById('menu_id').getElementsByTagName('a')[4].href = "algebra_vyrazheniya.html";
document.getElementById('menu_id').getElementsByTagName('a')[5].href = "algebra_numpromexhytki.html";
document.getElementById('menu_id').getElementsByTagName('a')[6].href = "algebra_yravneniya.html";
document.getElementById('menu_id').getElementsByTagName('a')[7].href = "algebra_neravenstva.html";
document.getElementById('menu_id').getElementsByTagName('a')[8].href = "algebra_functions.html";
// геомерия
document.getElementById('menu_id').getElementsByTagName('a')[9].href = "geometrya_tochkaprpl.html";
document.getElementById('menu_id').getElementsByTagName('a')[10].href = "geometrya_okruzhnost.html";
document.getElementById('menu_id').getElementsByTagName('a')[11].href = "geometrya_treugolnik.html";
document.getElementById('menu_id').getElementsByTagName('a')[12].href = "geometrya_chetyrehygolniki.html";
// математическая логика
document.getElementById('menu_id').getElementsByTagName('a')[13].href = "logic_vyskazyvaniya.html";
document.getElementById('menu_id').getElementsByTagName('a')[14].href = "logic_mnozhestva.html";
// теория вероятности
document.getElementById('menu_id').getElementsByTagName('a')[15].href = "probabilitytheory_probability.html";
// линейная алгебра
document.getElementById('menu_id').getElementsByTagName('a')[16].href = "linearalgebra_vectory.html";
document.getElementById('menu_id').getElementsByTagName('a')[17].href = "linearalgebra_matricy.html";
// матанализ
document.getElementById('menu_id').getElementsByTagName('a')[18].href = "matanaliz_proizvodnye.html";
document.getElementById('menu_id').getElementsByTagName('a')[19].href = "matanaliz_limits.html";
document.getElementById('menu_id').getElementsByTagName('a')[20].href = "matanaliz_integrals.html";
// источники
document.getElementById('menu_id').getElementsByTagName('a')[21].href = "";
document.getElementById('menu_id').getElementsByTagName('a')[21].classList.add('ref');;