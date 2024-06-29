let result;
document.getElementById('calc').onclick = function calc() {
    let result = document.getElementById('Input').value;
    document.getElementById('resulthere').textContent = eval(result);
}
