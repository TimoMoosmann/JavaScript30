const keyDivs = document.getElementsByClassName('key')

const keys = []
for (const keyDiv of keyDivs) {
    keyDiv.addEventListener("click", (event) => {
        playDrum(String.fromCharCode(keyDiv.dataset.key))
    })

    keys.push(String.fromCharCode(keyDiv.dataset.key))
}

document.addEventListener("keydown", event => {
    playDrum(event.key)
})

function playDrum(key) {
    if (!keys.includes(key)) {
        return
    }

    const keyInt = key.charCodeAt(0)
    const keyDiv = document.querySelector(`.key[data-key='${keyInt}']`)

    const tone = document.querySelector(`audio[data-key='${keyInt}']`)

    playToneAsync(tone, keyDiv)
}

function playToneAsync(tone, keyDiv) {
    const newTone = new Audio(tone.src)
    newTone.addEventListener("ended", () => keyDiv.classList.remove('playing'))
    newTone.play()
    keyDiv.classList.add('playing')
}

