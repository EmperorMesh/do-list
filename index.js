const myNodelist = document.getElementsByTagName("LI");
for (var i = 0; i < myNodelist.length; i++) {
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
const close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
    close[i].onclick = () => {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

const list = document.querySelector('ul');
list.addEventListener('click', (ev) => {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);
creatElement = () => {
    const li = document.createElement("li");
    const inputValue = document.getElementById("myInput").value;
    const text = document.createTextNode(inputValue);
    li.appendChild(text);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
