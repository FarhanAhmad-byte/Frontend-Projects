import calcYear from "./calculator.js"

const result = document.getElementById('result')
const form = document.getElementById('form')


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const birthDate = document.getElementById('birthDate').value
    
    const age = calcYear(birthDate)
   
    if (age) {
        result.innerText = age
    }
})