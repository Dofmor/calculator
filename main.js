let firstNumber = secondNumber = ''
let operator = ''
let answer = ''
let firstValueSet = false
let displayValue = '0'


function clickButtons() {
    const buttons = document.querySelectorAll('button')
    buttons.inn
    buttons.forEach(button => button.addEventListener('click', function () {
        if (button.classList.contains('number-button'))
            setNumber(button.innerHTML)
        else if (button.id === 'equals')
            evaluate()
        else if (button.classList.contains('operation-button'))
            setOperator(button.innerHTML)
        else if (button.id === 'clear')
            clear()
    }))
}

clickButtons()

function updateDisplay(value) {
    displayValue = value
    const display = document.querySelector('#display')
    display.innerHTML = displayValue
}

function setNumber(value) {
    if (!firstValueSet) {
        firstNumber += value
        updateDisplay(firstNumber)
    }
    else {
        secondNumber += value
        updateDisplay(secondNumber)
    }
}

function setOperator(value) {
    operator = value
    firstValueSet = true
    if(firstNumber === '')
        firstNumber = '0'
    updateDisplay(operator)
}

function evaluate () {


    console.log(`firstNumber: ${firstNumber} secondNumber: ${secondNumber} operator: ${operator}`)
    let firstNum = parseFloat(firstNumber)
    let secondNum = parseFloat(secondNumber)

    console.log(`firstNum: ${firstNum} secondNum: ${secondNum} operator: ${operator}`)

    switch (operator) {
        case '/':
            answer = firstNum / secondNum
            break
        case 'x':
            answer = firstNum * secondNum
            break
        case '-':
            answer = firstNum - secondNum
            break
        case '+':
            answer = firstNum + secondNum
            break
        default:
            return
    }
    console.log(`answer: ${answer}`)
    updateDisplay(answer)

    firstNumber = answer
    secondNumber = ''
    operator = ''
}

function clear() {
    firstNumber = secondNumber = ''
    firstValueSet = false
    updateDisplay('0')
}