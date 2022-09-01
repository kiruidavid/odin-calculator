const calculator = {
    displayValue: '0', 
    firstOperand: null, 
    waitingForSecondOperand: false, 
    operator: null
} 
function updateDisplay(){
    let display = document.getElementById('display') 
    display.value = calculator.displayValue
} 
updateDisplay() 
const keys = document.querySelector('.calcKeys') 
keys.addEventListener('click' , (e) => {
    if(!e.target.matches('button')){
        return;
    } 
    switch (e.target.value){
        case '+': 
        case '-': 
        case '*': 
        case '/': 
        case '=': 
          handleOperator(e.target.value); 
          break;  
          case '.': 
          inputDecimal(e.target.value); 
          break; 
          case 'all-clear': 
          resetCalc(); 
          break; 
          default: 
          if(Number.isInteger(parseFloat(e.target.value))){
            inputDigit(e.target.value)
          }
         
    } 
    updateDisplay()
}) 
function inputDigit(digit){
    const {displayValue, waitingForSecondOperand} = calculator 
    if(waitingForSecondOperand == true){
        calculator.displayValue = digit 
        calculator.waitingForSecondOperand = false
    } else {
        calculator.displayValue = displayValue == '0' ? digit : displayValue + digit
    } 
    console.log(calculator)
} 
function inputDecimal(dot){
    if(calculator.waitingForSecondOperand == true){
      calculator.displayValue = '0.' 
      calculator.waitingForSecondOperand = false 
      return
    } 
    if(!calculator.displayValue.includes(dot)){
        calculator.displayValue += dot
    }
} 
function handleOperator(nextOperator){
   const {firstOperand, displayValue, operator} = calculator 
   const inputValue = parseFloat(displayValue) 
   if(operator && calculator.waitingForSecondOperand){
    calculator.operator = nextOperator 
    console.log(calculator) 
    return
   } 
   if (firstOperand === null && !isNaN(inputValue)){
    calculator.firstOperand = inputValue
   } else if (operator){
    const result = calculate(firstOperand, inputValue, operator) 
    calculator.displayValue = `${parseFloat(result.toFixed(4))}` 
    calculator.firstOperand = result
   } 
   calculator.waitingForSecondOperand = true 
   calculator.operator = nextOperator 
   console.log(calculator)
} 
function calculate(firstOperand, secondOperand, operator){
    if(operator == '+'){
        return firstOperand + secondOperand
    } else if (operator == '-'){ 
        return firstOperand - secondOperand

    } else if(operator == '*'){ 
        return firstOperand * secondOperand

    } else if(operator == '/'){ 
        return firstOperand / secondOperand

    } 
    return secondOperand
} 
function resetCalc(){
    calculator.displayValue = 0 
    calculator.firstOperand = null 
    calculator.waitingForSecondOperand = false 
    calculator.operator = null 
    console.log(calculator)
}