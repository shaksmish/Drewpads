
function inputData(value) {
    console.log(value);
}

function init() {
    document.querySelector('.page')
    addEventListener("click", function(event) {
        inputData(event.target.innerText);
    })
}

init();