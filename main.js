let lol = document.getElementById('lol');
let lacase = document.getElementById('lacase');
let displayer = document.getElementById('displayer');
let nav = document.getElementById('nav');


function addText(){
    let newCaseInput = document.createElement('textarea');
    newCaseInput.setAttribute('class', 'textInput');
    newCaseInput.setAttribute('rows', '3');
    newCaseInput.setAttribute('cols', '40');
    
    let newLaButton = document.createElement('button');
    newLaButton.setAttribute('class', 'purple');
    newLaButton.innerText = 'La';
    
    displayer.appendChild(newCaseInput);
    displayer.appendChild(newLaButton);

    newCaseInput.focus()

    function textDisplay(){
        let newTextElement = document.createElement('p');
        newTextElement.setAttribute('class', 'textOutput')
        newTextElement.innerText = newCaseInput.value;
        
        displayer.removeChild(newCaseInput);
        displayer.removeChild(newLaButton);

        if (newCaseInput.value === ''){
            return 0;
        }else{
            lacase.appendChild(newTextElement);
        }
        newTextElement.addEventListener('dblclick', function(){
            lacase.removeChild(newTextElement);
        });
    }

    newLaButton.addEventListener('click', textDisplay);

    //Raccourci pour afficher le texte :
    newCaseInput.addEventListener('keydown', (event)=>{
        if (event.shiftKey && event.key && (event.key === 'Enter')){
            textDisplay();
        }
    });
    
}

function addMath(){
    let newCaseInput = document.createElement('textarea');
    newCaseInput.setAttribute('class', 'mathInput');
    newCaseInput.setAttribute('rows', '3');
    newCaseInput.setAttribute('cols', '40');
    
    let newLaButton = document.createElement('button');
    newLaButton.setAttribute('class', 'purple');
    newLaButton.innerText = 'La';
    
    displayer.appendChild(newCaseInput);
    displayer.appendChild(newLaButton);

    newCaseInput.focus()

    function mathDisplay(){
        let newMathElement = document.createElement('p');
        newMathElement.setAttribute('class', 'mathOutput')

        katex.render(newCaseInput.value, newMathElement, {
            throwOnError : false,
        });

        displayer.removeChild(newCaseInput);
        displayer.removeChild(newLaButton);
        
        if (newCaseInput.value === ''){
            return 0;
        }else{
            lacase.appendChild(newMathElement);
        }

        newMathElement.addEventListener('dblclick', function(){
            lacase.removeChild(newMathElement);
        });
    }
    newLaButton.addEventListener('click', mathDisplay);
    
    //Raccourci pour afficher la formule :
    newCaseInput.addEventListener('keydown', (event)=>{
        if (event.shiftKey && event.key && (event.key === 'Enter')){
            mathDisplay();
        }
    });

}

//Raccourci pour ajouter du text
window.addEventListener('keydown', (event)=>{
    if (event.ctrlKey && event.altKey && (event.key === 't')){
        addText();
    }
});

//Raccourci pour ajouter une formule
window.addEventListener('keydown', (event)=>{
    if (event.ctrlKey && event.altKey && (event.key === 'm')){
        addMath();
    }
});



//a faire :
/*
-suppression des case et élément (édition si possible) -> FAIT
-lignes plus grandes. -> Fait
-raccourci pour écrire et executer plus vite comme sur jupyter...
-avoir une copie du text mis avant dans le presse papier
- faire si possible des macros.
-Ajouté des "super cases" pour mélanger le texte normale et formules mathémqtiques.
*/
