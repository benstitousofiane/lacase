let lol = document.getElementById('lol');
let lacase = document.getElementById('lacase');
let displayer = document.getElementById('displayer');
let nav = document.getElementById('nav');


function addText(){
    let newCaseInput = document.createElement('textarea');
    newCaseInput.setAttribute('class', 'textInput')
    
    let newLaButton = document.createElement('button');
    newLaButton.setAttribute('class', 'purple');
    newLaButton.innerText = 'La';
    
    displayer.appendChild(newCaseInput);
    displayer.appendChild(newLaButton);

    newCaseInput.focus()

    newLaButton.addEventListener('click', function(){
        let newTextElement = document.createElement('p');
        newTextElement.setAttribute('class', 'textOutput')
        newTextElement.innerText = newCaseInput.value;
        
        displayer.removeChild(newCaseInput);
        displayer.removeChild(newLaButton);
        
        lacase.appendChild(newTextElement);
        newTextElement.addEventListener('dblclick', function(){
            lacase.removeChild(newTextElement);
        });
    });
    
}

function addMath(){
    let newCaseInput = document.createElement('textarea');
    newCaseInput.setAttribute('class', 'mathInput')
    
    let newLaButton = document.createElement('button');
    newLaButton.setAttribute('class', 'purple');
    newLaButton.innerText = 'La';
    
    displayer.appendChild(newCaseInput);
    displayer.appendChild(newLaButton);

    newCaseInput.focus()

    newLaButton.addEventListener('click', function(){
        let newMathElement = document.createElement('p');
        newMathElement.setAttribute('class', 'mathOutput')
        
        katex.render(newCaseInput.value, newMathElement, {
            throwOnError : false,
        });

        displayer.removeChild(newCaseInput);
        displayer.removeChild(newLaButton);
        
        lacase.appendChild(newMathElement);
        newMathElement.addEventListener('dblclick', function(){
            lacase.removeChild(newMathElement);
        });
    });
    
}

//a faire :
/*
-suppression des case et élément (édition si possible) -> FAIT
-lignes plus grandes. -> Fait
-raccourci pour écrire et executer plus vite comme sur jupyter...
-avoir une copie du text mis avant dans le presse papier
- faire si possible des macros.
*/
