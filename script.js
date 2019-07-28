let submitButton = document.querySelector("#submitButton")
let textField = document.querySelector("#textField")
let randomChoreButton = document.querySelector("#gimmeRandomChore")
let pickedChore = document.querySelector("#pickedChore")

let choresArray = []


submitButton.addEventListener("click", function(e) {
  e.preventDefault();
  if(textField.value.length > 1 || textField.value !== Number){
    choresArray.push(textField.value)
  }
  textField.value = ''
  console.log(choresArray)
})

randomChoreButton.addEventListener("click", function(e) {
  e.preventDefault();
  let randomChore = choresArray[Math.floor(Math.random() * choresArray.length)];
  console.log(randomChore)
  pickedChore.innerHTML = randomChore
})


