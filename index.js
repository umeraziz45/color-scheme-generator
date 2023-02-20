const colourPicker = document.querySelector('.input-colour');
const modePicker = document.querySelector('.input-selector');
const btn = document.querySelector('.input-submit');
const colourDisplay = document.querySelectorAll('.display-colour');

const fetchColour = () => {

  let test = colourPicker.value.split('');
  let test1 = test.slice(1).join('');

  fetch(`https://www.thecolorapi.com/scheme?hex=${test1}&mode=${modePicker.value}&count=6`)
  .then( res => res.json())
  .then( data => {
    console.log(colourDisplay, data);
    for(let i = 0; i<data.colors.length; i++){
      colourDisplay[i].innerHTML = `<img src=\'${data.colors[i].image.named}\'>`
      console.log(colourDisplay);
    }
  })
}

btn.addEventListener('click', fetchColour);