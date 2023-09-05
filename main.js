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
        else if (button.id === 'invert')
            invert()
        else if (button.id === 'percentage')
            percentage()

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
    console.log(`firstNumber: ${firstNumber} secondNumber: ${secondNumber} operator: ${operator}`)
}

function setOperator(value) {
    firstValueSet = true
    if (operator !== '') {
        evaluate()
        operator = value
        return
    }
    else if (firstNumber === '')
        firstNumber = '0'
    operator = value
    updateDisplay(operator)
}

function evaluate() {

    if (secondNumber === '')
        return

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

function invert() {
    let invertedVal
    if (!firstValueSet && firstNumber !== '') {
        (firstNumber > 0) ? invertedVal = "-" + firstNumber : invertedVal = firstNumber.substring(1)
        firstNumber = invertedVal
        updateDisplay(firstNumber)
    }
    else if (secondNumber !== '') {
        (secondNumber > 0) ? invertedVal = "-" + secondNumber : invertedVal = secondNumber.substring(1)
        secondNumber = invertedVal
        updateDisplay(secondNumber)
    }

}

function percentage() {
    let percentagedVal

    if (!firstValueSet && firstNumber !== '' && firstNumber !== '0'){
        percentagedVal = parseFloat(firstNumber)/100
        firstNumber = '' + percentagedVal
        updateDisplay(firstNumber)
    }
    else if (secondNumber !== '' && secondNumber !== '0'){
        percentagedVal = parseFloat(SecurityPolicyViolationEvent)/100
        secondNumber = '' + percentagedVal
        updateDisplay(secondNumber)
    }


        
}