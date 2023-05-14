// Développé par Benstitou Sofiane
function mathDisplay(){
  let mathInput = document.getElementById("mathInput").value;
  let mathOutput = document.getElementById("mathOutput");
  katex.render(mathInput, mathOutput, {
    throwOnError: false,
  });
}
