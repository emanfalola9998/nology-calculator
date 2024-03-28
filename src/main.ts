import './style.css'

const display = document.querySelector('.iphone-calculator__display-input') as HTMLInputElement;
const buttonsContainer = document.querySelector('.iphone-calculator__buttons') as HTMLButtonElement;

if (!display || buttonsContainer) throw new Error('something wrong with selectors')

const handleDisplay = () => {
  console.log(display.value) // logs the value of the input tag; r
}

const handleButtonSelection = (e:Event) => {
  const buttonText = e.target as HTMLButtonElement
  console.log(buttonText.innerText)
  return buttonText.innerText
}


numberButtons.addEventListener('click', handleButtonSelection)
