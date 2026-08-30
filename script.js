
let value = 0;

load();
function increase() {
    value++;
    document.getElementById('demo').innerHTML = value;

}


function decrease() {
    if (value > 0) {
        value--;
        document.getElementById('demo').innerHTML = value;
    }
}

function reset() {
    value = 0;
    document.getElementById('demo').innerHTML = 0;
}

function save() {
    localStorage.setItem('demo', value);
}

function load() {
    let saved_value = localStorage.getItem('demo');
    if (saved_value != null)
        value = Number(saved_value);
    document.getElementById('demo').innerHTML = value;
}

