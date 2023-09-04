let prevNumber = newNumber = null
let prevOperator = newOperator = null
let currNumber = currOperator = null
let displayNumber = '0'

const buttons = document.querySelectorAll('button')

function clickButton() {
    buttons.forEach (button => button.addEventListener('click', function() {
        if (button.id === 'clear')
            clear()
        else if (button.classList.contains('number-button'))
            setNumber()
        else if (button.classList.contains('operation-button'))
            setOperator()
        else if (button.id === 'invert')
            invertNumber()
        else if (button.id === 'reduce')
            reduceNumber()
        else
            alert(button.innerHTML)
    })) 
}

clickButton()

function updateDisplay() {
    const display = document.querySelector('#display')
    display.innerHTML = displayNumber
}

function clear() {
    displayNumber = '0'
    updateDisplay()
}


function setNumber() {
    console.log('setNumber()')
    console.log(`prevNumber = ${prevNumber}`)
    console.log(`newNumber = ${newNumber}`)
}

function setOperator() {
    console.log('setOperator()')
}

function invertNumber() {
    console.log('invertNumber()')
}

function reduceNumber() {
    console.log('reduceNumber()')
}

function operate (num1, num2, operator) {
    switch(operator) {
        case '/':
            return (num2 === 0) ? "Invalid" : num1 / num2
        case 'x':
            return num1 * num2
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
    }
}

function roundAccurately(num, places) {
    return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
}

