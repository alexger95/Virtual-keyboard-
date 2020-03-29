const alphabet = ["Esc", "f1", "f2", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];
const fkey = ["Esc", "f1", "f2"];

function virtualKeyboard() {
    document.querySelector('body').innerHTML = "<textarea id='text' cllass='text'></textarea><div class='keyboard'></div>";
    alphabet.forEach((element) => {
        let node = document.createElement("div");
        node.innerHTML = element;
        node.classList.add('key');
        document.querySelector('.keyboard').appendChild(node);

    })

}

function check(event) {
    if (alphabet.includes(event.key)) return true;
    if (alphabet.includes(event.toElement.innerText)) return true;
}
/*display input*/
document.addEventListener('click', (event) => {
        if (check(event)) {
            document.getElementById("text").append(event.target.innerText);
            console.log(event.target.innerText);
        }


    })
    /*key input*/
document.addEventListener('keydown', function(event) {
    console.log(event.key);
    if (check(event)) {
        document.getElementById("text").append(event.key);
        document.querySelectorAll("div").forEach((element) => {
            element.classList.remove('presed');
            if (element.innerText == event.key) {
                element.classList.add('presed');
            }
        })
    }
});

virtualKeyboard();