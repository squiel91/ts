var a = document.getElementById('a');
var b = document.getElementById('b');
var calc = document.getElementById('calc');

function add(a, b) {
    return a + b;
}
calc.addEventListener('click', function () {
    console.log(add(1, 2));
    console.log(add('1', '2'));
});
