// Développée par Benstitou Sofiane

lolContainer = document.getElementById('lol');
navContainer = document.getElementById('nav');
articleContainer  = document.getElementById('article');
addTextButton = document.getElementById('addTextButton');
addMathButton = document.getElementById('addMathButton');
addImageButton = document.getElementById('addImageButton');


function addText(){
    navContainer.removeChild(addTextButton);
    navContainer.removeChild(addMathButton);
    navContainer.removeChild(addImageButton);

    newTextCase = document.createElement('textarea');
    newTextCase.setAttribute('class', 'textCase');
    newTextCase.setAttribute('cols', '50');
    newTextCase.setAttribute('rows', '2');


    LaButton = document.createElement('button');
    LaButton.innerText = "La"
    LaButton.setAttribute('class', 'purple');

    lolContainer.appendChild(newTextCase);
    lolContainer.appendChild(LaButton);
    newTextCase.focus();

    LaButton.addEventListener('click', function(){
        textDisplay();
        textOutput.addEventListener('dblclick', function(){
            articleContainer.removeChild(textOutput);
        })
    });
}

function textDisplay(){
    textOutput =  document.createElement('p');
    textOutput.innerText = newTextCase.value;
    textOutput.setAttribute('class', 'textOutput');

    addTextButton = document.createElement('button');
    addTextButton.innerText = '+T'
    addTextButton.setAttribute('class', 'orange');
    addTextButton.setAttribute('onclick', 'addText()');


    addMathButton = document.createElement('button');
    addMathButton.innerText = '+M'
    addMathButton.setAttribute('class', 'green');
    addMathButton.setAttribute('onclick', 'addMath()');

    addImageButton = document.createElement('button');
    addImageButton.innerText = '+I'
    addImageButton.setAttribute('class', 'blue');
    addImageButton.setAttribute('onclick', 'addImage()');

    lolContainer.removeChild(newTextCase);
    lolContainer.removeChild(LaButton);

    articleContainer.appendChild(textOutput);

    navContainer.appendChild(addTextButton);
    navContainer.appendChild(addMathButton);
    navContainer.appendChild(addImageButton);
}


function addMath(){
    navContainer.removeChild(addTextButton);
    navContainer.removeChild(addMathButton);
    navContainer.removeChild(addImageButton);

    newMathCase = document.createElement('textarea');
    newMathCase.setAttribute('class', 'mathCase');

    LaButton = document.createElement('button');
    LaButton.innerText = "La"
    LaButton.setAttribute('class', 'purple');
    

    lolContainer.appendChild(newMathCase);
    lolContainer.appendChild(LaButton);

    newMathCase.focus()

    LaButton.addEventListener('click', function(){
        mathDisplay();
        mathOutput.addEventListener('dblclick', function(){
            articleContainer.removeChild(mathOutput);
        })
    });
}

function mathDisplay(){
    mathOutput = document.createElement('p')
    //Mettre sous format maths en sortie avec KaTeX
    katex.render(newMathCase.value, mathOutput, {
        throwOnError : false,
    });
    mathOutput.setAttribute('class', 'mathOutput');
    mathOutput.setAttribute('cols', '50');
    mathOutput.setAttribute('rows', '2');

    addTextButton = document.createElement('button');
    addTextButton.innerText = '+T'
    addTextButton.setAttribute('class', 'orange');
    addTextButton.setAttribute('onclick', 'addText()');


    addMathButton = document.createElement('button');
    addMathButton.innerText = '+M'
    addMathButton.setAttribute('class', 'green');
    addMathButton.setAttribute('onclick', 'addMath()');

    addImageButton = document.createElement('button');
    addImageButton.innerText = '+I'
    addImageButton.setAttribute('class', 'blue');
    addImageButton.setAttribute('onclick', 'addImage()');


    lolContainer.removeChild(newMathCase);
    lolContainer.removeChild(LaButton);

    articleContainer.appendChild(mathOutput);

    navContainer.appendChild(addTextButton);
    navContainer.appendChild(addMathButton);
    navContainer.appendChild(addImageButton);
}



//a faire :
/*
-suppression des case et élément (édition si possible)
-lignes plus grandes.
-raccourci pour écrire et executer plus vite comme sur jupyter...
-avoir une copie du text mis avant dans le presse papier
*/
