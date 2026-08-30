

document.getElementById('additionBtn').addEventListener('click', increase);
document.getElementById('subtratBtn').addEventListener('click', decrease);
document.getElementById('resetBtn').addEventListener('click', reset);
document.getElementById('saveBtn').addEventListener('click', save);
document.getElementById('loadBtn').addEventListener('click', load);


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

