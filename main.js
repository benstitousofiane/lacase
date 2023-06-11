lolContainer = document.getElementById('lol');
navContainer = document.getElementById('nav');
addTextButton = document.getElementById('addTextButton');
addMathButton = document.getElementById('addMathButton');
addImageButton = document.getElementById('addImageButton');


function addText(){
    navContainer.removeChild(addTextButton);
    navContainer.removeChild(addMathButton);
    navContainer.removeChild(addImageButton);

    newTextCase = document.createElement('textarea');
    newTextCase.setAttribute('class', 'textCase');

    LaButton = document.createElement('button');
    LaButton.innerText = "La"
    LaButton.setAttribute('class', 'purple');
    LaButton.setAttribute('onclick', 'textDisplay()');

    lolContainer.appendChild(newTextCase);
    lolContainer.appendChild(LaButton);
    newTextCase.focus();
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

    navContainer.appendChild(textOutput);
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
    LaButton.setAttribute('onclick', 'mathDisplay()');

    lolContainer.appendChild(newMathCase);
    lolContainer.appendChild(LaButton);

    newMathCase.focus()
}

function mathDisplay(){
    mathOutput = document.createElement('p')
    //Mettre sous format maths en sortie avec KaTeX
    katex.render(newMathCase.value, mathOutput, {
        throwOnError : false,
    });
    mathOutput.setAttribute('class', 'mathOutput');

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

    navContainer.appendChild(mathOutput);
    navContainer.appendChild(addTextButton);
    navContainer.appendChild(addMathButton);
    navContainer.appendChild(addImageButton);
}

//a faire :
/*
-suppression des case et élément (édition si possible)
-lignes plus grandes.
-raccourci pour écrire et executer plus vite comme sur jupyter...
*/
