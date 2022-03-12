let btnAdd = document.getElementById("btnAdd");
let inpText = document.getElementById("inpText");
let list = document.getElementById("list");
let btnClear = document.getElementById("btnClear")

btnAdd.onclick = function () {
    //creating li and span
    let li = document.createElement("li");
    span = document.createElement("span");
    span.innerText = " " + inpText.value;

    //creating delete button
    let btnX = document.createElement("button");
    btnX.innerText = "X";
    btnX.onclick = function (event) {
        event.target.parentElement.remove();
    };

    // create up button
    let btnUp = document.createElement("button");
    btnUp.innerText = "⬆️";
    btnUp.onclick = function (event) {
        /*
        event.target =button
        event.target.parentElement = li
        event.target.parentElement.parentElement = list

        */
        event.target.parentElement.parentElement.insertBefore(
            event.target.parentElement, //this position element will move up
            event.target.parentElement.previousElementSibling //referece 
        );
    };
    // crete down button
    let btnDown = document.createElement("button");
    btnDown.innerText = "⬇️";
    btnDown.onclick = function (event) {
        event.target.parentElement.parentElement.insertBefore(
            event.target.parentElement.nextElementSibling,
            event.target.parentElement
        );

    };
    li.appendChild(btnX);
    li.appendChild(btnUp);
    li.appendChild(btnDown);
    li.appendChild(span);
    list.appendChild(li);
}

btnClear.onclick = function () {
    inpText.value = ""
}
