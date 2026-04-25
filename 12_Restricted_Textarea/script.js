const textArea = document.getElementById('text')
const totalWords = document.getElementById('totalWords')



textArea.addEventListener('keydown', (event)=> {
    const length = textArea.value.length
    if (length == 250) {
        textArea.setAttribute('disabled', 1)
        textArea.style.border = '3px solid red'
        totalWords.style.color = 'red'
    }

    totalWords.firstChild.innerText = length
})
