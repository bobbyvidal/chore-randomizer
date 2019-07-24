let submitButton = document.querySelector("#submitButton")
let textField = document.querySelector("#textField")

let choresArray = []

submitButton.addEventListener("click", function(e) {
  e.preventDefault();
  choresArray.push(textField.value)
  textField.value = ''
  console.log(choresArray)
})

