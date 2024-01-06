document.querySelector('#checkAge').addEventListener('click', getInputValue)

function getInputValue(){
  const age = Number(document.querySelector('#age').value)
  document.querySelector('#futureAge').innerText = age + 1
}