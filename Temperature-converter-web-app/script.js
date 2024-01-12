document.getElementById('convertButton').addEventListener('click', function() {
    var inputTemp = parseFloat(document.getElementById('inputTemp').value);
    var unit = document.querySelector('input[name="unit"]:checked').value;
    var result;
    if (unit === 'C') {
        result = (inputTemp * 9/5) + 32;
    } else {
        result = (inputTemp - 32) * 5/9;
    }
    document.getElementById('result').textContent = result.toFixed(2) + ' ' + unit;
});
