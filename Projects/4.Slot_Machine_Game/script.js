let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')

let inpSpeed = document.getElementById('inpSpeed')

let RandomValues = [
    '😀', '😂', '😎', '🤩', '🙄', '🤑', '🥶', '🤬', '🤢', '🤡', '🤪', '😱'
]
function getRandomValues() {
    return RandomValues[Math.floor(Math.random() * 12)]
}
let changeEmoji1 = setInterval(() => {
    value1.innerText = getRandomValues()
}, 200);
let changeEmoji2 = setInterval(() => {
    value2.innerText = getRandomValues()
}, 200);
let changeEmoji3 = setInterval(() => {
    value3.innerText = getRandomValues()
}, 200);


/* using it in another way */

/* let animationId;
function updateAnimation(newSpeed) {
    if (animationId) clearInterval(animationId)
    animationId = setInterval(() => {
        value1.innerText = getRandomValues()
        value2.innerText = getRandomValues()
        value3.innerText = getRandomValues()
    }, 1000 / newSpeed);
} */

inpSpeed.onchange = function (event) {
    let rootcss = document.documentElement // is :root of css
    rootcss.style.setProperty('--speed', event.target.value)
    /* updateAnimation(event.target.value) */
}
let btnSpin = document.getElementById('btnSpin')
btnSpin.onclick = function () {

    document.getElementById('value1').style.animationPlayState = "running";
    document.getElementById('value2').style.animationPlayState = "running";
    document.getElementById('value3').style.animationPlayState = "running";
    setTimeout(() => {
        document.getElementById('value1').style.animationPlayState = "paused";
        clearInterval(changeEmoji1);
        document.getElementById('value1').style.animation = "none";
        setTimeout(() => {
            clearInterval(changeEmoji2)
            document.getElementById('value2').style.animationPlayState = "paused";
            document.getElementById('value2').style.animation = "none";
        }, 500);
        setTimeout(() => {
            clearInterval(changeEmoji3)
            document.getElementById('value3').style.animationPlayState = "paused";
            document.getElementById('value3').style.animation = "none";
        }, 1000);
        setTimeout(() => {
            if (document.getElementById('value1').innerText == document.getElementById('value2').innerText && document.getElementById('value2').innerText == document.getElementById('value3').innerText) {
                window.alert("🎉🎉🎉🎆YOU WON THE GAME-ALL SLOTS ARE MATCHED🎆🎉🎉🎉")
            } else if (document.getElementById('value1').innerText == document.getElementById('value2').innerText || document.getElementById('value2').innerText == document.getElementById('value3').innerText) {
                window.alert("🎉🎉🎉🎆YOU WON-2 SLOTS ARE MATCHED🎇🎉🎉🎉")
            } else {
                window.alert('😟YOU LOSE...TRY AGAIN...😟')
            }
            if (window.confirm("DO YOU WANT TO PLAY AGAIN")) {
                window.location.reload()
            } else {
                window.close()
            }
        }, 1500);


    }, 4000);


}
