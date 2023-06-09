// Développé par Benstitou Sofiane
function mathDisplay(){
  let mathInput = document.getElementById("mathInput").value;
  let textInput = document.getElementById("textInput").value;
  let mathOutput = document.getElementById("mathOutput");
  let textOutput = document.getElementById("textOutput");
  
  textOutput.innerHTML = textInput;
  katex.render(mathInput, mathOutput, {
    throwOnError: false,
  });
}
