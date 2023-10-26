body = document.getElementById("body");
main = document.getElementById("main");
header = document.getElementById("header");

//pour l'affichage du footer ou non
footer = document.getElementById("footer");
footerState = true;


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

//variable d'anti-conflit entre écriture des input et des raccourcis
bindLocker = false;




//activation des états :

//Squelette :
// function enableX(){
    
//     if (yState == false){
//         formulaState = false     ;
//         textState = false        ;
//         sautState = false        ;
//         boxState = false         ;
//         grandTextState = false   ;
//         editState = false        ;
//         copyState = false        ;
//         pasteState = false       ;

//         lacaseColorButton.style.backgroundColor = buttonColor.value ;
//         formulaButton.style.backgroundColor = buttonColor.value     ;
//         textButton.style.backgroundColor = buttonColor.value        ;
//         SautButton.style.backgroundColor = buttonColor.value        ;
//         boxButton.style.backgroundColor = buttonColor.value         ;
//         imageButton.style.backgroundColor = buttonColor.value       ;
//         grandTextButton.style.backgroundColor = buttonColor.value   ;
//         editButton.style.backgroundColor = buttonColor.value        ;
//         copyButton.style.backgroundColor = buttonColor.value        ;
//         pasteButton.style.backgroundColor = buttonColor.value       ;
//         colorConfigButton.style.backgroundColor = buttonColor.value ;
//     } else{
//         formulaState = false     ;
//         textState = false        ;
//         sautState = false        ;
//         boxState = false         ;
//         grandTextState = false   ;
//         editState = false        ;
//         copyState = false        ;
//         pasteState = false       ;

//         lacaseColorButton.style.backgroundColor = buttonColor.value ;
//         formulaButton.style.backgroundColor = buttonColor.value     ;
//         textButton.style.backgroundColor = buttonColor.value        ;
//         SautButton.style.backgroundColor = buttonColor.value        ;
//         boxButton.style.backgroundColor = buttonColor.value         ;
//         imageButton.style.backgroundColor = buttonColor.value       ;
//         grandTextButton.style.backgroundColor = buttonColor.value   ;
//         editButton.style.backgroundColor = buttonColor.value        ;
//         copyButton.style.backgroundColor = buttonColor.value        ;
//         pasteButton.style.backgroundColor = buttonColor.value       ;
//         colorConfigButton.style.backgroundColor = buttonColor.value ;
//     }
    
// }
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

//cacher les boutons :
function hideFooter(){
    if (footerState == true){
        footer.style.display = "none";
        footerState = false;
    } else{
        footer.style.display = "block";
        footerState = true;
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

//-------------------------------------- Le gros de l'app -------------------------------------------

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
            formulaState = false;
            formulaButton.style.backgroundColor = buttonColor.value;

            let formulaInput = document.createElement("textarea");
            formulaInput.setAttribute("class", "formulaInput");
            formulaInput.setAttribute("cols", "30");
            formulaInput.setAttribute("rows", "1");
            formulaInput.style.backgroundColor = boxColor.value;
            bindLocker = true;
            
            let addButton = document.createElement("button");
            addButton.style.textAlign = "center";
            
            addButtonText = document.createElement("h2");
            addButtonText.innerHTML = "Ajouter";
            
            addButton.appendChild(addButtonText);
            uneCase.appendChild(formulaInput);
            uneCase.appendChild(addButton);
            uneCase.style.border = "none";
            formulaInput.focus();
            
            
            function formulaDisplay(){
                if (formulaInput.value !== ""){
                    let formula = document.createElement("h2");
                    //Formatage de la formule mathématique
                    katex.render(formulaInput.value, formula, {
                        throwOnError : false,
                        displayMode : true,
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

            formulaInput.addEventListener("keydown", (event) =>{
                if (event.shiftKey && event.key == "Enter"){
                    formulaDisplay();
                    bindLocker = false;
                }
            });

            addButton.addEventListener("click", function(){
                formulaDisplay();
                bindLocker = false;
            });
            

        }
        else if (textState == true){
            textState = false;
            textButton.style.backgroundColor = buttonColor.value;

            let textInput = document.createElement("textarea");
            textInput.setAttribute("class", "textInput");
            textInput.setAttribute("cols", "30");
            textInput.setAttribute("rows", "1");
            textInput.style.backgroundColor = boxColor.value;
            bindLocker = true;   

            let addButton = document.createElement("button");
            addButton.style.textAlign = "center";
            
            addButtonText = document.createElement("h2");
            addButtonText.innerHTML = "Ajouter";
            
            addButton.appendChild(addButtonText);
            uneCase.appendChild(textInput);
            uneCase.appendChild(addButton);
            uneCase.style.border = "none";
            textInput.focus();
            
            
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

            textInput.addEventListener("keydown", (event) =>{
                if (event.shiftKey && event.key == "Enter"){
                    textDisplay();
                    bindLocker = false;
                }
                
            });

            addButton.addEventListener("click", function(){ 
                textDisplay();
                bindLocker = false;
            });
            


        }
        else if (sautState == true){
            sautState = false
            SautButton.style.backgroundColor = buttonColor.value;
            if (uneCase.childElementCount > 0){
                if (uneCase.lastChild.className != "break"){
                    saut = document.createElement("h2");
                    saut.setAttribute("class", "break");
                    uneCase.appendChild(saut);
                } else{
                    uneCase.removeChild(uneCase.lastChild);
                }

            } else{
                sautState = false
                SautButton.style.backgroundColor = buttonColor.value;
            }


        }
        else if (boxState == true){
            boxState = false;
            boxButton.style.backgroundColor = buttonColor.value;

            if (uneCase.classList.length > 0){
                uneCase.removeAttribute("class");
                uneCase.style.backgroundColor = backgroundColor.value;
                uneCase.color = textColor.value;
            } else{
                uneCase.setAttribute("class", "box");
                uneCase.style.backgroundColor = boxColor.value;
            }


        }
        else if (grandTextState == true){
            grandTextState = false;
            grandTextButton.style.backgroundColor = buttonColor.value;

            let grandTextInput = document.createElement("textarea");
            grandTextInput.setAttribute("class", "grandTextInput");
            grandTextInput.setAttribute("cols", "30");
            grandTextInput.setAttribute("rows", "1");
            grandTextInput.style.backgroundColor = boxColor.value;
            bindLocker = true;   

            let addButton = document.createElement("button");
            addButton.style.textAlign = "center";
            
            addButtonText = document.createElement("h2");
            addButtonText.innerHTML = "Ajouter";
            
            addButton.appendChild(addButtonText);
            uneCase.appendChild(grandTextInput);
            uneCase.appendChild(addButton);
            uneCase.style.border = "none";
            grandTextInput.focus();
            
            
            function textDisplay(){
                if (grandTextInput.value !== ""){
                    let grandText = document.createElement("h2");
                    grandText.innerHTML = grandTextInput.value;
                    
                    uneCase.removeChild(grandTextInput);
                    uneCase.removeChild(addButton);
                    uneCase.appendChild(grandText);

                    grandText.addEventListener("dblclick", function(){
                        uneCase.removeChild(grandText);
                        if (uneCase.childElementCount == 0){
                            uneCase.style.border = "10px black solid";
                        }
                    });
                    
                }else{
                    uneCase.removeChild(grandTextInput);
                    uneCase.removeChild(addButton);
                    if (uneCase.childElementCount == 0){
                        uneCase.style.border = "10px black solid";
                    }
                } 
            }

            grandTextInput.addEventListener("keydown", (event) =>{
                if (event.shiftKey && event.key == "Enter"){
                    textDisplay();
                    bindLocker = false;
                }
            });

            addButton.addEventListener("click", function(){ 
                textDisplay();
                bindLocker = false;
            });


        }
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

function addImage(){
    let imageInput = document.createElement("textarea");
    imageInput.setAttribute("class", "imageInput");
    imageInput.setAttribute("placeholder", "url de l'image");
    
    let addButton = document.createElement("button");
    addButton.setAttribute("class", "imageInput")
    
    let addButtonText = document.createElement("h2");
    addButtonText.innerHTML = "Ajouter";

    addButton.appendChild(addButtonText);
    main.appendChild(imageInput);
    main.appendChild(addButton);

    bindLocker = true;

    imageInput.focus()   


    function imageDisplay(){
        if (imageInput.value !== ""){
            image = document.createElement("img");
            image.setAttribute("src", imageInput.value);
    
            main.removeChild(imageInput);
            main.removeChild(addButton);
            main.appendChild(image);

            image.addEventListener("dblclick", function(){
                main.removeChild(image);
            });
        } else{
            main.removeChild(imageInput);
            main.removeChild(addButton);
        }
    }

    addButton.addEventListener("click", imageDisplay);

    imageInput.addEventListener("keydown", (event) =>{
       if (event.shiftKey && event.key === "Enter"){
            imageDisplay();
            bindLocker = false;
       } 
    });

    bindLocker = false;
}


//----------------------- raccourci clavier -----------------------------

window.addEventListener("keydown", (event) => {
    
    if (event.key === "l"){
        if (bindLocker == false){
            addCase();
        }
    }
    else if (event.key === "s"){
        if (bindLocker == false){
            enableFormula();
        }
    }
    else if (event.key === "t"){
        if (bindLocker == false){
            enableText();
        }
    }
    else if (event.code === "Space"){
        if (bindLocker == false){
            enableSaut();
        }
    }
    else if (event.key === "b"){
        if (bindLocker == false){
            enableBox();
        }
    }
    else if (event.key === "i"){
        if (bindLocker == false){
            //Attendre un petit instant pour ne pas mettre en conflit le racourci et le input
            setTimeout(function(){
                addImage();
            }, 1);
        }
    }
    else if (event.key === "g"){
        if (bindLocker == false){
            enableGrandText();
        }
    }
    else if (event.key === "c"){
        if (bindLocker == false){
            enableGrandText();
        }
    }
    else if (event.key == "f"){
        if (bindLocker == false){
            hideFooter();
        }
    }
    else if (event.key === "h"){
        if (bindLocker == false){
            hideHeader();
        }
    }
    else if (event.key === "c"){
        if (bindLocker == false){
            colorConfigBoxDisplay();
        }
    }
    
});
