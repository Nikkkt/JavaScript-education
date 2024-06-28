document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('username');
    if (inputField) {
        inputField.addEventListener('input', removeNumbersFromInput);
    }
});

function removeNumbersFromInput(e) {
    function isDigit(char) {
        return char >= '0' && char <= '9';
    }
    let value = e.target.value;
    let newValue = '';
    for (let i = 0; i < value.length; i++) if (!isDigit(value[i])) newValue += value[i];
    e.target.value = newValue;
}

