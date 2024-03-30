import './style.css';
import * as math from 'mathjs';
import { MathJsStatic } from 'mathjs'; 

const display = document.querySelector('.iphone-calculator__display-input') as HTMLInputElement;
const buttonsContainer = document.querySelector('.iphone-calculator__buttons') as HTMLDivElement;
const numbers = document.querySelector('.iphone-calculator__buttons-numbers') as HTMLElement;
const operations = document.querySelector('.iphone-calculator__buttons-operations') as HTMLElement;
const special = document.querySelector('.iphone-calculator__buttons-special') as HTMLElement;
const deleteAll = document.querySelector('.iphone-calculator__buttons-cancel') as HTMLElement;
const equals = document.querySelector('.iphone-calculator__buttons-solve') as HTMLElement;


// const firstValue: number = 0;
// const secondValue: number = 0;

const mathInstance: MathJsStatic = math

if (!display || !buttonsContainer || !numbers || !operations || !special || !deleteAll ) throw new Error('Something is wrong with the selectors');


const handleDisplay = (value: string) => {
  
  display.value += value;
  console.log('display:', display.value); 
}

const handleButtonSelection = (e: MouseEvent): string => {
  const buttonText = (e.target as HTMLButtonElement).innerText;
  if(buttonText === "="){
    return "";
  }
  return buttonText;
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



