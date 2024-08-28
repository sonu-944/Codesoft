function dis(val) {
    document.getElementById("result").value += val;
}

function solve() {
    try {
        let expression = document.getElementById("result").value;
        // Handle modulo operation separately
        if (expression.includes('%')) {
            let numbers = expression.split('%');
            if (numbers.length === 2) {
                let result = (parseFloat(numbers[0]) * (parseFloat(numbers[1]) / 100));
                document.getElementById("result").value = result;
            } else {
                document.getElementById("result").value = "Error";
            }
        } else {
            document.getElementById("result").value = eval(expression);
        }
    } catch (e) {
        document.getElementById("result").value = "Error";
    }
}

function clr() {
    document.getElementById("result").value = "";
}

function del() {
    var result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, -1);
}

// Add keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if ((key >= '0' && key <= '9') || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
        dis(key);
    } else if (key === 'Enter') {
        event.preventDefault();
        solve();
    } else if (key === 'Backspace') {
        del();
    } else if (key === 'Escape') {
        clr();
    }
});