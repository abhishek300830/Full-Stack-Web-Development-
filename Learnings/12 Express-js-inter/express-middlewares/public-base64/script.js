let textarea = document.getElementById('textarea')
let btnEncode = document.getElementById('btnEncode')
let formtextarea = document.getElementById('formtextarea')
let btnEncrypt = document.getElementById('btnEncrypt')

btnEncode.onclick = function () {
    console.log('hello')
    let data = textarea.value
    data = btoa(data)
    formtextarea.value = data
}
btnEncrypt.onclick = function () {
    let data = formtextarea.value
    data = encryptData(data)
    formtextarea.value = data
}
function encryptData(rawdata) {
    let text = rawdata;
    let newText = "";
    /* console.log(text) 
     console.log(string[50]) */
    for (let i = 0; text[i] != undefined; i = i + 1) {
        if (text[i] == text[i].toUpperCase()) {
            newText += text[i].toLowerCase();
        } else {
            /* console.log(text[i] = text[i].toUpperCase()) */
            newText += text[i].toUpperCase();
        }
    }
    /* console.log(newText) */
    return newText;
}
