let lol = document.getElementById('lol');
let lacase = document.getElementById('lacase');
let displayer = document.getElementById('displayer');
let nav = document.getElementById('nav');


let bindlocker = false;

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
            bindlocker = false;
            return 0;

        }else{
            lacase.appendChild(newTextElement);
        }
        newTextElement.addEventListener('dblclick', function(){
            lacase.removeChild(newTextElement);
        });

        bindlocker = false;
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
            bindlocker = false;
            return 0;
        }else{
            lacase.appendChild(newMathElement);
        }

        newMathElement.addEventListener('dblclick', function(){
            lacase.removeChild(newMathElement);
        });

        bindlocker = false;
    }
    newLaButton.addEventListener('click', mathDisplay);
    
    //Raccourci pour afficher la formule :
    newCaseInput.addEventListener('keydown', (event)=>{
        if (event.shiftKey && event.key && (event.key === 'Enter')){
            mathDisplay();
        }
    });

}


//Raccourci fenêtre
window.addEventListener('keydown', (event)=>{
    //Raccourci pour ajouter du text
    if (event.key === 't'){
        if (bindlocker === true){
            return 0;
        }
        else{
            setTimeout(()=>{
            addText();
            }, 1);
            bindlocker = true;
        }
        

    }

    //Raccourci pour ajouter une formule mathématique
    if (event.key === 'm'){
        if (bindlocker === true){
            return 0;
        }
        else{
            setTimeout(()=>{
            addMath();
            }, 1);
            bindlocker = true;
        }
        

    }

});

//erreur à corriger, pas de problème pour avec les raccourcis, gérée la vairbale bindlocker quand on utilise les bouton manuellement

//a faire :
/*
-suppression des case et élément (édition si possible) -> FAIT
-lignes plus grandes. -> Fait
-raccourci pour écrire et executer plus vite comme sur jupyter... -> Fait
-avoir une copie du text mis avant dans le presse papier
- faire si possible des macros.
-Ajouté des "super cases" pour mélanger le texte normale et formules mathémqtiques (necessite une refonte) .
*/
