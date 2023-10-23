
// body = document.getElementById("body")                              ;
// widgetList = document.getElementsByClassName("widget")              ;
// textH1List = document.querySelectorAll("h1")                        ;
// textH2List = document.querySelectorAll("h2")                        ;
// buttonList = document.querySelectorAll("button")                    ;
// boxList = document.getElementsByClassName("box")                    ;


colorConfigBox = document.getElementById("colorConfigBox")              ;
colorConfigItems = document.getElementById("colorConfigItems")          ;
colorConfigItem = document.getElementsByClassName("colorConfigItem")    ;


backgroundColor = document.getElementById("backgroundColor")    ;
textColor = document.getElementById("textColor")                ;
boxColor = document.getElementById("boxColor")                  ;
textBoxColor = document.getElementById("textBoxColor")          ;
buttonColor = document.getElementById("buttonColor")            ;
wdgetColor = document.getElementById("widgetColor")             ;

//fonction pour remettre les couleurs par défaut :
function resetColor(){
    body = document.getElementById("body")                              ;
    widgetList = document.getElementsByClassName("widget")              ;
    textH1List = document.querySelectorAll("h1")                        ;
    textH2List = document.querySelectorAll("h2")                        ;
    buttonList = document.querySelectorAll("button")                    ;
    boxList = document.getElementsByClassName("box")                    ;
    //Changer la couleur de fond
    body.style.backgroundColor = "#1a1d27" ;

    //Changer la couleurs de fond de tout les fenêtres
    for (let i = 0; i < widgetList.length; i++){
        widgetList[i].style.backgroundColor = "#171716" ;
    }
    // Changer le fond de couleur des boutons
    for (let i = 0; i < buttonList.length; i++){
        buttonList[i].style.backgroundColor = "black"   ;
    }
    //Changer la couleur de fond des boites
    for (let i = 0; i < boxList.length; i++){
        boxList[i].style.backgroundColor = "#171716"    ;
        
    }

    //Changer la couleur par défault des textes :
    for (let i = 0; i < textH1List.length; i++){
        if (textH1List[i].parentNode.tagName == "DIV"){
            textH1List[i].style.color = "white" ;
        } else{
            textH1List[i].style.color = "white"             ;
        }
    }
    for (let i = 0; i < textH2List.length; i++){
        if (textH2List[i].parentNode.tagName == "DIV" || textH2List[i].parentNode.tagName == "BUTTON"){
            textH2List[i].style.color = "white"             ;
        } else{
            textH2List[i].style.color = "white"             ;
        }
    }


}

//changer la couleur par les choix de l'utilisateur
function changeColor(){
    body = document.getElementById("body")                              ;
    widgetList = document.getElementsByClassName("widget")              ;
    textH1List = document.querySelectorAll("h1")                        ;
    textH2List = document.querySelectorAll("h2")                        ;
    buttonList = document.querySelectorAll("button")                    ;
    boxList = document.getElementsByClassName("box")                    ;

    //Changer la couleur de fond
    body.style.backgroundColor = backgroundColor.value          ;

    //Changer la couleurs de fond de tout les fenêtres
    for (let i = 0; i < widgetList.length; i++){
        widgetList[i].style.backgroundColor = widgetColor.value ;
    }
    // Changer le fond de couleur des boutons
    for (let i = 0; i < buttonList.length; i++){
        buttonList[i].style.backgroundColor = buttonColor.value    ;
    }
    //Changer la couleur de fond des boites
    for (let i = 0; i < boxList.length; i++){
        boxList[i].style.backgroundColor = boxColor.value       ;
    }

    //Changer la couleur par défault des textes :
    //couleur des h1
    for (let i = 0; i < textH1List.length; i++){
        if (textH1List[i].parentNode.tagName == "DIV"){
            textH1List[i].style.color = textBoxColor.value  ;
        } else{
            textH1List[i].style.color = textColor.value     ;
        }
    }
    //couleur des h2
    for (let i = 0; i < textH2List.length; i++){
        if (textH2List[i].parentNode.tagName == "DIV" || textH2List[i].parentNode.tagName == "BUTTON"){
            textH2List[i].style.color = textBoxColor.value ;
        } else{
            textH2List[i].style.color = textColor.value    ;
        }
    }


}
