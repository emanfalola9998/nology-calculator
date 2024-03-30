import './style.css';
import * as math from 'mathjs';

// Assign the imported math object to mathInstance
const mathInstance: any = math;




const display = document.querySelector('.iphone-calculator__display-input') as HTMLInputElement;
const buttonsContainer = document.querySelector('.iphone-calculator__buttons') as HTMLDivElement;
const numbers = document.querySelector('.iphone-calculator__buttons-numbers') as HTMLElement;
const operations = document.querySelector('.iphone-calculator__buttons-operations') as HTMLElement;
const deleteAll = document.querySelector('.iphone-calculator__buttons-cancel') as HTMLElement;
const equals = document.querySelector('.iphone-calculator__buttons-solve') as HTMLElement;
const plusminus = document.querySelector('.iphone-calculator__buttons-plusminus') as HTMLElement;
const percentage = document.querySelector('.iphone-calculator__buttons-percentage') as HTMLElement;




if (!display || !buttonsContainer || !numbers || !operations || !deleteAll || !plusminus ) throw new Error('Something is wrong with the selectors');


const handleDisplay = (value: string) => {
  display.value += value;
  console.log('display:', display.value); 
}

const handleButtonSelection = (e: MouseEvent): string => {
    const buttonText = (e.target as HTMLButtonElement).innerText;
    switch (buttonText.toLowerCase()) {
      case "=":
      case "c":
      case "+/-":
      case "%":
        return "";
      default:
        return buttonText;
    }
  }

const calculate = (expression: string, mathInstance: math.MathJsStatic) => {
      if (expression){
        const result = mathInstance.evaluate(expression);
        console.log('Result:', result);
        return result;
      }
      else{
        console.log('Error evaluating expression:');
        return null;
      }
}

// const handleDelete = (value: string, e: MouseEvent) => {
//   const buttonText = (e.target as HTMLButtonElement).innerText;
//   if(buttonText === "c"){
//     display.value = "";
//     return display.value
//   }
// }

const changeSign = () => {
  const numberValue = parseFloat(display.value)
  if (numberValue > 0){
    display.value = (`-${numberValue}`).toString()
    return (`-${numberValue}`).toString()
  }
  else {
    display.value = (Math.abs(numberValue)).toString()
    return (Math.abs(numberValue)).toString()
  }
}

const changeToPercentage = () => {
  const numberValue = parseFloat(display.value)
  const percentage = (numberValue / 100)
  display.value = percentage.toString()
    return percentage
}

buttonsContainer.addEventListener('click', (e) => {
  const buttonText = handleButtonSelection(e);
  handleDisplay(buttonText);
});

equals.addEventListener('click', () => {
  const expression = display.value;
  calculate(expression, mathInstance);
  display.value = "" 
  handleDisplay(calculate(expression, mathInstance));
});

deleteAll.addEventListener('click', () => {
  display.value = "";
})

plusminus.addEventListener('click', () => changeSign());

percentage.addEventListener('click', () => changeToPercentage());

