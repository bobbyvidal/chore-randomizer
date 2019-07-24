let submitButton = document.querySelector("#submitButton")
let textField = document.querySelector("#textField")

submitButton.addEventListener("click", function(e) {
  e.preventDefault();
  console.log('hi');
  textField.value = ''
  console.log('text field cleared');
})