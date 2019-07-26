let submitButton = document.querySelector("#submitButton")
let textField = document.querySelector("#textField")
let randomChoreButton = document.querySelector("#gimmeRandomChore")

let choresArray = []


submitButton.addEventListener("click", function(e) {
  e.preventDefault();
  if(textField.value.length > 1){
    choresArray.push(textField.value)
  }
  textField.value = ''
  console.log(choresArray)
})

randomChoreButton.addEventListener("click", function(e) {
  e.preventDefault();
  let randomChore = choresArray[Math.floor(Math.random() * choresArray.length)];
  console.log(randomChore)
})


