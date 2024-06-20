document.getElementById('convertBtn').addEventListener('click', function() {
    let celsius = document.getElementById('celsius').value;

    if (isNaN(celsius)) {
        alert("Masukkan angka yang benar");
        return;
    }

    celsius = parseFloat(celsius);
    let fahrenheit = (celsius * 9/5) + 32;
    let calculation = `${celsius}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;

    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    document.getElementById('calculation').value = calculation;
});

document.getElementById('reverseBtn').addEventListener('click', function() {
    let fahrenheit = document.getElementById('fahrenheit').value;

    if (isNaN(fahrenheit)) {
        alert("Masukkan angka yang benar");
        return;
    }

    fahrenheit = parseFloat(fahrenheit);
    let celsius = (fahrenheit - 32) * 5/9;
    let calculation = `${fahrenheit}°F - 32 * (5/9) = ${celsius.toFixed(2)}°C`;

    document.getElementById('celsius').value = celsius.toFixed(2);
    document.getElementById('calculation').value = calculation;
});

function reset() {
    var ta = document.getElementById('ta');
    if (!ta.value || ta.value != ta.defaultValue && confirm('reset nilai')) {
        ta.value = ta.defa;
    }
}