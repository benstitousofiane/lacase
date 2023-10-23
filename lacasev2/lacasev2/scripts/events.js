
body = document.getElementById("body")
main = document.getElementById("main")
header = document.getElementById("header")

//pour la gestiond des couleurs
backgroundColor = document.getElementById("backgroundColor")    ;
textColor = document.getElementById("textColor")                ;
boxColor = document.getElementById("boxColor")                  ;
textBoxColor = document.getElementById("textBoxColor")          ;
buttonColor = document.getElementById("buttonColor")            ;
wdgetColor = document.getElementById("widgetColor")             ;

colorConfigBox = document.getElementById("colorConfigBox")  ;
colorConfigBoxState = false                                 ;





//boutons de l'app
lacaseColorButton = document.getElementById("lacaseButton")         ;
formulaButton = document.getElementById("formulaButton")            ;
textButton = document.getElementById("textButton")                  ;
SautButton = document.getElementById("SautButton")                  ;
boxButton = document.getElementById("boxButton")           ;
imageButton = document.getElementById("imageButton")                ;
grandTextButton = document.getElementById("grandTextButton")        ;
editButton = document.getElementById("editButton")                  ;
copyButton = document.getElementById("copyButton")                  ;
pasteButton = document.getElementById("pasteButton")                ;
colorConfigButton = document.getElementById("colorConfigButton")    ;

//les états :
formulaState = false;
textState = false;
sautState = false;
boxState = false;
grandTextState = false;
editState = false;
copyState = false;
pasteState = false;
headerState = true;







//activation des états :

//Squelette :
function enableX(){
    
    if (yState == false){
        formulaState = false     ;
        textState = false        ;
        sautState = false        ;
        boxState = false         ;
        grandTextState = false   ;
        editState = false        ;
        copyState = false        ;
        pasteState = false       ;

        lacaseColorButton.style.backgroundColor = buttonColor.value ;
        formulaButton.style.backgroundColor = buttonColor.value     ;
        textButton.style.backgroundColor = buttonColor.value        ;
        SautButton.style.backgroundColor = buttonColor.value        ;
        boxButton.style.backgroundColor = buttonColor.value         ;
        imageButton.style.backgroundColor = buttonColor.value       ;
        grandTextButton.style.backgroundColor = buttonColor.value   ;
        editButton.style.backgroundColor = buttonColor.value        ;
        copyButton.style.backgroundColor = buttonColor.value        ;
        pasteButton.style.backgroundColor = buttonColor.value       ;
        colorConfigButton.style.backgroundColor = buttonColor.value ;
    } else{
        formulaState = false     ;
        textState = false        ;
        sautState = false        ;
        boxState = false         ;
        grandTextState = false   ;
        editState = false        ;
        copyState = false        ;
        pasteState = false       ;

        lacaseColorButton.style.backgroundColor = buttonColor.value ;
        formulaButton.style.backgroundColor = buttonColor.value     ;
        textButton.style.backgroundColor = buttonColor.value        ;
        SautButton.style.backgroundColor = buttonColor.value        ;
        boxButton.style.backgroundColor = buttonColor.value         ;
        imageButton.style.backgroundColor = buttonColor.value       ;
        grandTextButton.style.backgroundColor = buttonColor.value   ;
        editButton.style.backgroundColor = buttonColor.value        ;
        copyButton.style.backgroundColor = buttonColor.value        ;
        pasteButton.style.backgroundColor = buttonColor.value       ;
        colorConfigButton.style.backgroundColor = buttonColor.value ;
    }
    
}
// pour activer un : mettre en true celui sélectionner, en false le reste,
// et faire de même pour les couleurs des boutons avec les input values avec : .style.backgroundColor = window.getComputedStyle(colorConfigBox).backgroundColor

function enableFormula(){
    
    if (formulaState == false){
        formulaState = true     ;
        textState = false       ;
        sautState = false       ;
        boxState = false        ;
        grandTextState = false  ;
        editState = false       ;
        copyState = false       ;
        pasteState = false      ;

        lacaseColorButton.style.backgroundColor = buttonColor.value                                     ;
        formulaButton.style.backgroundColor = window.getComputedStyle(colorConfigBox).backgroundColor   ;
        textButton.style.backgroundColor = buttonColor.value                                            ;
        SautButton.style.backgroundColor = buttonColor.value                                            ;
        boxButton.style.backgroundColor = buttonColor.value                                             ;
        imageButton.style.backgroundColor = buttonColor.value                                           ;
        grandTextButton.style.backgroundColor = buttonColor.value                                       ;
        editButton.style.backgroundColor = buttonColor.value                                            ;
        copyButton.style.backgroundColor = buttonColor.value                                            ;
        pasteButton.style.backgroundColor = buttonColor.value                                           ;
        colorConfigButton.style.backgroundColor = buttonColor.value                                     ;
    } else{
        formulaState = false    ;
        textState = false       ;
        sautState = false       ;
        boxState = false        ;
        grandTextState = false  ;
        editState = false       ;
        copyState = false       ;
        pasteState = false      ;

        lacaseColorButton.style.backgroundColor = buttonColor.value ;
        formulaButton.style.backgroundColor = buttonColor.value     ;
        textButton.style.backgroundColor = buttonColor.value        ;
        SautButton.style.backgroundColor = buttonColor.value        ;
        boxButton.style.backgroundColor = buttonColor.value         ;
        imageButton.style.backgroundColor = buttonColor.value       ;
        grandTextButton.style.backgroundColor = buttonColor.value   ;
        editButton.style.backgroundColor = buttonColor.value        ;
        copyButton.style.backgroundColor = buttonColor.value        ;
        pasteButton.style.backgroundColor = buttonColor.value       ;
        colorConfigButton.style.backgroundColor = buttonColor.value ;
    }
    
}

function enableText(){
    
    if (textState == false){
        formulaState = false     ;
        textState = true         ;
        sautState = false        ;
        boxState = false         ;
        grandTextState = false   ;
        editState = false        ;
        copyState = false        ;
        pasteState = false       ;

        lacaseColorButton.style.backgroundColor = buttonColor.value ;
        formulaButton.style.backgroundColor = buttonColor.value     ;
        textButton.style.backgroundColor = window.getComputedStyle(colorConfigBox).backgroundColor;
        SautButton.style.backgroundColor = buttonColor.value        ;
        boxButton.style.backgroundColor = buttonColor.value         ;
        imageButton.style.backgroundColor = buttonColor.value       ;
        grandTextButton.style.backgroundColor = buttonColor.value   ;
        editButton.style.backgroundColor = buttonColor.value        ;
        copyButton.style.backgroundColor = buttonColor.value        ;
        pasteButton.style.backgroundColor = buttonColor.value       ;
        colorConfigButton.style.backgroundColor = buttonColor.value ;
    } else{
        formulaState = false     ;
        textState = false        ;
        sautState = false        ;
        boxState = false         ;
        grandTextState = false   ;
        editState = false        ;
        copyState = false        ;
        pasteState = false       ;

        lacaseColorButton.style.backgroundColor = buttonColor.value ;
        formulaButton.style.backgroundColor = buttonColor.value     ;
        textButton.style.backgroundColor = buttonColor.value        ;
        SautButton.style.backgroundColor = buttonColor.value        ;
        boxButton.style.backgroundColor = buttonColor.value         ;
        imageButton.style.backgroundColor = buttonColor.value       ;
        grandTextButton.style.backgroundColor = buttonColor.value   ;
        editButton.style.backgroundColor = buttonColor.value        ;
        copyButton.style.backgroundColor = buttonColor.value        ;
        pasteButton.style.backgroundColor = buttonColor.value       ;
        colorConfigButton.style.backgroundColor = buttonColor.value ;
    }
    
}

function enableSaut(){
    
    if (sautState == false){
        formulaState = false     ;
        textState = false        ;
        sautState = true        ;
        boxState = false         ;
        grandTextState = false   ;
        editState = false        ;
        copyState = false        ;
        pasteState = false       ;

        lacaseColorButton.style.backgroundColor = buttonColor.value ;
        formulaButton.style.backgroundColor = buttonColor.value     ;
        textButton.style.backgroundColor = buttonColor.value        ;
        SautButton.style.backgroundColor = window.getComputedStyle(colorConfigBox).backgroundColor;
        boxButton.style.backgroundColor = buttonColor.value         ;
        imageButton.style.backgroundColor = buttonColor.value       ;
        grandTextButton.style.backgroundColor = buttonColor.value   ;
        editButton.style.backgroundColor = buttonColor.value        ;
        copyButton.style.backgroundColor = buttonColor.value        ;
        pasteButton.style.backgroundColor = buttonColor.value       ;
        colorConfigButton.style.backgroundColor = buttonColor.value ;
    } else{
        formulaState = false     ;
        textState = false        ;
        sautState = false        ;
        boxState = false         ;
        grandTextState = false   ;
        editState = false        ;
        copyState = false        ;
        pasteState = false       ;

        lacaseColorButton.style.backgroundColor = buttonColor.value ;
        formulaButton.style.backgroundColor = buttonColor.value     ;
        textButton.style.backgroundColor = buttonColor.value        ;
        SautButton.style.backgroundColor = buttonColor.value        ;
        boxButton.style.backgroundColor = buttonColor.value         ;
        imageButton.style.backgroundColor = buttonColor.value       ;
        grandTextButton.style.backgroundColor = buttonColor.value   ;
        editButton.style.backgroundColor = buttonColor.value        ;
        copyButton.style.backgroundColor = buttonColor.value        ;
        pasteButton.style.backgroundColor = buttonColor.value       ;
        colorConfigButton.style.backgroundColor = buttonColor.value ;
    }
    
}

function enableBox(){
    
    if (boxState == false){
        formulaState = false     ;
        textState = false        ;
        sautState = false        ;
        boxState = true         ;
        grandTextState = false   ;
        editState = false        ;
        copyState = false        ;
        pasteState = false       ;

        lacaseColorButton.style.backgroundColor = buttonColor.value ;
        formulaButton.style.backgroundColor = buttonColor.value     ;
        textButton.style.backgroundColor = buttonColor.value        ;
        SautButton.style.backgroundColor = buttonColor.value        ;
        boxButton.style.backgroundColor = window.getComputedStyle(colorConfigBox).backgroundColor;
        imageButton.style.backgroundColor = buttonColor.value       ;
        grandTextButton.style.backgroundColor = buttonColor.value   ;
        editButton.style.backgroundColor = buttonColor.value        ;
        copyButton.style.backgroundColor = buttonColor.value        ;
        pasteButton.style.backgroundColor = buttonColor.value       ;
        colorConfigButton.style.backgroundColor = buttonColor.value ;
    } else{
        formulaState = false     ;
        textState = false        ;
        sautState = false        ;
        boxState = false         ;
        grandTextState = false   ;
        editState = false        ;
        copyState = false        ;
        pasteState = false       ;

        lacaseColorButton.style.backgroundColor = buttonColor.value ;
        formulaButton.style.backgroundColor = buttonColor.value     ;
        textButton.style.backgroundColor = buttonColor.value        ;
        SautButton.style.backgroundColor = buttonColor.value        ;
        boxButton.style.backgroundColor = buttonColor.value         ;
        imageButton.style.backgroundColor = buttonColor.value       ;
        grandTextButton.style.backgroundColor = buttonColor.value   ;
        editButton.style.backgroundColor = buttonColor.value        ;
        copyButton.style.backgroundColor = buttonColor.value        ;
        pasteButton.style.backgroundColor = buttonColor.value       ;
        colorConfigButton.style.backgroundColor = buttonColor.value ;
    }
    
}


function enableGrandText(){
    
    if (grandTextState == false){
        formulaState = false     ;
        textState = false        ;
        sautState = false        ;
        boxState = false         ;
        grandTextState = true   ;
        editState = false        ;
        copyState = false        ;
        pasteState = false       ;

        lacaseColorButton.style.backgroundColor = buttonColor.value ;
        formulaButton.style.backgroundColor = buttonColor.value     ;
        textButton.style.backgroundColor = buttonColor.value        ;
        SautButton.style.backgroundColor = buttonColor.value        ;
        boxButton.style.backgroundColor = buttonColor.value         ;
        imageButton.style.backgroundColor = buttonColor.value       ;
        grandTextButton.style.backgroundColor = window.getComputedStyle(colorConfigBox).backgroundColor;
        editButton.style.backgroundColor = buttonColor.value        ;
        copyButton.style.backgroundColor = buttonColor.value        ;
        pasteButton.style.backgroundColor = buttonColor.value       ;
        colorConfigButton.style.backgroundColor = buttonColor.value ;
    } else{
        formulaState = false     ;
        textState = false        ;
        sautState = false        ;
        boxState = false         ;
        grandTextState = false   ;
        editState = false        ;
        copyState = false        ;
        pasteState = false       ;

        lacaseColorButton.style.backgroundColor = buttonColor.value ;
        formulaButton.style.backgroundColor = buttonColor.value     ;
        textButton.style.backgroundColor = buttonColor.value        ;
        SautButton.style.backgroundColor = buttonColor.value        ;
        boxButton.style.backgroundColor = buttonColor.value         ;
        imageButton.style.backgroundColor = buttonColor.value       ;
        grandTextButton.style.backgroundColor = buttonColor.value   ;
        editButton.style.backgroundColor = buttonColor.value        ;
        copyButton.style.backgroundColor = buttonColor.value        ;
        pasteButton.style.backgroundColor = buttonColor.value       ;
        colorConfigButton.style.backgroundColor = buttonColor.value ;
    }
    
}

function enableEdit(){
    
    if (editState == false){
        formulaState = false     ;
        textState = false        ;
        sautState = false        ;
        boxState = false         ;
        grandTextState = false   ;
        editState = true        ;
        copyState = false        ;
        pasteState = false       ;

        lacaseColorButton.style.backgroundColor = buttonColor.value ;
        formulaButton.style.backgroundColor = buttonColor.value     ;
        textButton.style.backgroundColor = buttonColor.value        ;
        SautButton.style.backgroundColor = buttonColor.value        ;
        boxButton.style.backgroundColor = buttonColor.value         ;
        imageButton.style.backgroundColor = buttonColor.value       ;
        grandTextButton.style.backgroundColor = buttonColor.value   ;
        editButton.style.backgroundColor = window.getComputedStyle(colorConfigBox).backgroundColor;
        copyButton.style.backgroundColor = buttonColor.value        ;
        pasteButton.style.backgroundColor = buttonColor.value       ;
        colorConfigButton.style.backgroundColor = buttonColor.value ;
    } else{
        formulaState = false     ;
        textState = false        ;
        sautState = false        ;
        boxState = false         ;
        grandTextState = false   ;
        editState = false        ;
        copyState = false        ;
        pasteState = false       ;

        lacaseColorButton.style.backgroundColor = buttonColor.value ;
        formulaButton.style.backgroundColor = buttonColor.value     ;
        textButton.style.backgroundColor = buttonColor.value        ;
        SautButton.style.backgroundColor = buttonColor.value        ;
        boxButton.style.backgroundColor = buttonColor.value         ;
        imageButton.style.backgroundColor = buttonColor.value       ;
        grandTextButton.style.backgroundColor = buttonColor.value   ;
        editButton.style.backgroundColor = buttonColor.value        ;
        copyButton.style.backgroundColor = buttonColor.value        ;
        pasteButton.style.backgroundColor = buttonColor.value       ;
        colorConfigButton.style.backgroundColor = buttonColor.value ;
    }
    
}

function enableCopy(){
    
    if (copyState == false){
        formulaState = false     ;
        textState = false        ;
        sautState = false        ;
        boxState = false         ;
        grandTextState = false   ;
        editState = false        ;
        copyState = true        ;
        pasteState = false       ;

        lacaseColorButton.style.backgroundColor = buttonColor.value ;
        formulaButton.style.backgroundColor = buttonColor.value     ;
        textButton.style.backgroundColor = buttonColor.value        ;
        SautButton.style.backgroundColor = buttonColor.value        ;
        boxButton.style.backgroundColor = buttonColor.value         ;
        imageButton.style.backgroundColor = buttonColor.value       ;
        grandTextButton.style.backgroundColor = buttonColor.value   ;
        editButton.style.backgroundColor = buttonColor.value        ;
        copyButton.style.backgroundColor = window.getComputedStyle(colorConfigBox).backgroundColor;
        pasteButton.style.backgroundColor = buttonColor.value       ;
        colorConfigButton.style.backgroundColor = buttonColor.value ;
    } else{
        formulaState = false     ;
        textState = false        ;
        sautState = false        ;
        boxState = false         ;
        grandTextState = false   ;
        editState = false        ;
        copyState = false        ;
        pasteState = false       ;

        lacaseColorButton.style.backgroundColor = buttonColor.value ;
        formulaButton.style.backgroundColor = buttonColor.value     ;
        textButton.style.backgroundColor = buttonColor.value        ;
        SautButton.style.backgroundColor = buttonColor.value        ;
        boxButton.style.backgroundColor = buttonColor.value         ;
        imageButton.style.backgroundColor = buttonColor.value       ;
        grandTextButton.style.backgroundColor = buttonColor.value   ;
        editButton.style.backgroundColor = buttonColor.value        ;
        copyButton.style.backgroundColor = buttonColor.value        ;
        pasteButton.style.backgroundColor = buttonColor.value       ;
        colorConfigButton.style.backgroundColor = buttonColor.value ;
    }
    
}

function enablePaste(){
    
    if (pasteState == false){
        formulaState = false     ;
        textState = false        ;
        sautState = false        ;
        boxState = false         ;
        grandTextState = false   ;
        editState = false        ;
        copyState = false        ;
        pasteState = true       ;

        lacaseColorButton.style.backgroundColor = buttonColor.value ;
        formulaButton.style.backgroundColor = buttonColor.value     ;
        textButton.style.backgroundColor = buttonColor.value        ;
        SautButton.style.backgroundColor = buttonColor.value        ;
        boxButton.style.backgroundColor = buttonColor.value         ;
        imageButton.style.backgroundColor = buttonColor.value       ;
        grandTextButton.style.backgroundColor = buttonColor.value   ;
        editButton.style.backgroundColor = buttonColor.value        ;
        copyButton.style.backgroundColor = buttonColor.value        ;
        pasteButton.style.backgroundColor = window.getComputedStyle(colorConfigBox).backgroundColor;
        colorConfigButton.style.backgroundColor = buttonColor.value ;
    } else{
        formulaState = false     ;
        textState = false        ;
        sautState = false        ;
        boxState = false         ;
        grandTextState = false   ;
        editState = false        ;
        copyState = false        ;
        pasteState = false       ;

        lacaseColorButton.style.backgroundColor = buttonColor.value ;
        formulaButton.style.backgroundColor = buttonColor.value     ;
        textButton.style.backgroundColor = buttonColor.value        ;
        SautButton.style.backgroundColor = buttonColor.value        ;
        boxButton.style.backgroundColor = buttonColor.value         ;
        imageButton.style.backgroundColor = buttonColor.value       ;
        grandTextButton.style.backgroundColor = buttonColor.value   ;
        editButton.style.backgroundColor = buttonColor.value        ;
        copyButton.style.backgroundColor = buttonColor.value        ;
        pasteButton.style.backgroundColor = buttonColor.value       ;
        colorConfigButton.style.backgroundColor = buttonColor.value ;
    }
    
}

//manipulation des cases :

//Ajouter une case
function addCase(){
    let uneCase = document.createElement("article"); //let permet de individualiser un élément pour un évènement.
    uneCase.style.borderRadius = "20px"
    uneCase.style.border = "10px black solid";
    main.appendChild(uneCase);

    //Manipulation des cases avec les états:
    
    uneCase.addEventListener("click", function(){
        if (formulaState == true){
            let formulaInput = document.createElement("textarea");
            formulaInput.setAttribute("class", "formulaInput");
            formulaInput.setAttribute("cols", "30");
            formulaInput.setAttribute("rows", "1");
            formulaInput.style.backgroundColor = boxColor.value;
            
            let addButton = document.createElement("button");
            addButton.style.textAlign = "center";
            
            addButtonText = document.createElement("h2");
            addButtonText.innerHTML = "Ajouter";
            
            addButton.appendChild(addButtonText);
            uneCase.appendChild(formulaInput);
            uneCase.appendChild(addButton);
            uneCase.style.border = "none";
            formulaInput.focus();
            
            formulaState = false;
            formulaButton.style.backgroundColor = buttonColor.value;
            
            function formulaDisplay(){
                if (formulaInput.value !== ""){
                    let formula = document.createElement("h2");
                    //Formatage de la formule mathématique
                    katex.render(formulaInput.value, formula, {
                        throwOnError : false,
                        displayMode : false,
                        html : true,
                    });
                    
                    uneCase.removeChild(formulaInput);
                    uneCase.removeChild(addButton);
                    uneCase.appendChild(formula);

                    formula.addEventListener("dblclick", function(){
                        uneCase.removeChild(formula);
                        if (uneCase.childElementCount == 0){
                            uneCase.style.border = "10px black solid";
                        }
                    });
                    
                }else{
                    uneCase.removeChild(formulaInput);
                    uneCase.removeChild(addButton);
                    if (uneCase.childElementCount == 0){
                        uneCase.style.border = "10px black solid";
                    }
                } 
            }

            addButton.addEventListener("click", formulaDisplay);

            
                
            
            
        }
        else if (textState == true){
            let textInput = document.createElement("textarea");
            textInput.setAttribute("class", "textInput");
            textInput.setAttribute("cols", "30");
            textInput.setAttribute("rows", "1");
            textInput.style.backgroundColor = boxColor.value;
            
            let addButton = document.createElement("button");
            addButton.style.textAlign = "center";
            
            addButtonText = document.createElement("h2");
            addButtonText.innerHTML = "Ajouter";
            
            addButton.appendChild(addButtonText);
            uneCase.appendChild(textInput);
            uneCase.appendChild(addButton);
            uneCase.style.border = "none";
            textInput.focus();
            
            textState = false;
            textButton.style.backgroundColor = buttonColor.value;
            
            function textDisplay(){
                if (textInput.value !== ""){
                    let text = document.createElement("h2");
                    text.innerHTML = textInput.value;
                    
                    uneCase.removeChild(textInput);
                    uneCase.removeChild(addButton);
                    uneCase.appendChild(text);

                    text.addEventListener("dblclick", function(){
                        uneCase.removeChild(text);
                        if (uneCase.childElementCount == 0){
                            uneCase.style.border = "10px black solid";
                        }
                    });
                    
                }else{
                    uneCase.removeChild(textInput);
                    uneCase.removeChild(addButton);
                    if (uneCase.childElementCount == 0){
                        uneCase.style.border = "10px black solid";
                    }
                } 
            }

            addButton.addEventListener("click", textDisplay);

        }
        // else if (sautState == true)
        // else if (boxState == true)
        // else if (grandTextState == true)
        // else if (editState == true)
        // else if (copyState == true)
        // else if (pasteState == true)
    });

    //(Double clique détecter en même temps que l'autre double click pour retirer un élément)
    uneCase.addEventListener("dblclick", function(){
        if (uneCase.childElementCount === 0){
            main.removeChild(uneCase);
        }
    });
}



//personalisation:

//cacher la bar de haut
function hideHeader(){
    if (headerState == true){
        header.style.display = "none"   ;
        headerState = false             ;
    } else{
        header.style.display = "block"  ;
        headerState = true              ;
    }
    
}


//affichage du gestionnaire de couleurs
function colorConfigBoxDisplay(){
    if (colorConfigBoxState == false){
        colorConfigBox.style.display = "flex"                                                               ;
        colorConfigBoxState = true                                                                          ;
        colorConfigButton.style.backgroundColor = window.getComputedStyle(colorConfigBox).backgroundColor   ;
    } else{
        colorConfigBox.style.display = "none"                                                               ;
        colorConfigBoxState = false                                                                         ;
        colorConfigButton.style.backgroundColor = buttonColor.value                                         ;
    }
}


