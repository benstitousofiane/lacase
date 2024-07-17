//LaCase variables:
let LaCaseIndex = 0
let LaCaseDockHeight = 50
let LaCaseIsDockEnable = true
let LaCaseIsNumworksEnable = false
let LaCaseJustText = false


// //à mettre sur une fonction après pour réinitialiser les valeur !
// let LaCaseColorCollection = new Map()
// // alert(LaCaseColorCollection.get("backgroundInput")) 
// LaCaseColorCollection.set("backgroundColor",document.getElementById("backgroundInput").value)
// LaCaseColorCollection.set("buttonColor",document.getElementById("buttonInput").value)
// LaCaseColorCollection.set("boxColor",document.getElementById("boxInput").value)
// LaCaseColorCollection.set("textOutBoxColor",document.getElementById("textOutBoxInput").value)
// LaCaseColorCollection.set("textInBoxColor",document.getElementById("textInBoxInput").value)

let renderButton = document.getElementById("renderButton")
let casesButtonScript = document.getElementById("casesButtonScript")
let casesButtonSettings = document.getElementById("casesButtonSettings")
let scriptButton = document.getElementById("scriptButton")
let numworksButton = document.getElementById("numworksButton")
let settingsButton = document.getElementById("settingsButton")


//fenêtres
script = document.getElementById("script")
cases = document.getElementById("cases")
settings = document.getElementById("settings")
numworks = document.getElementById("numworks")

//docks
scriptDock = document.getElementById("scriptDock")
casesDock = document.getElementById("casesDock")
settingsDock = document.getElementById("settingsDock")


//inputs
scriptInput = document.getElementById("scriptInput")

//affichage du docks par défaut :
casesDock.style.bottom = `${LaCaseDockHeight}px`


//functions visuelles
function go2Script(){
    //Changement de fenêtre
    script.style.transform = "translateX(0%)"
    cases.style.transform = "translateX(110%)"
    settings.style.transform = "translateX(210%)"

    //Changement de dock avec animation
    casesDock.style.bottom = "-10%"
    settingsDock.style.bottom = "-10%"
    scriptDock.style.bottom = `${LaCaseDockHeight}px`

    LaCaseIndex--
    LaCaseIsDockEnable = true
}
function go2Cases(){
    script.style.transform = "translateX(-110%)"
    cases.style.transform = "translateX(0%)"
    settings.style.transform = "translateX(110%)"

    scriptDock.style.bottom = "-10%"
    casesDock.style.bottom = `${LaCaseDockHeight}px`
    settingsDock.style.bottom = "-10%"


    if (LaCaseIndex == -1){
        LaCaseIndex++
        scriptInput.blur()
    }
    else if (LaCaseIndex == 1){
        LaCaseIndex--
    }
    LaCaseIsDockEnable = true
}
function go2Settings(){
    script.style.transform = "translateX(-210%)"
    cases.style.transform = "translateX(-110%)"
    settings.style.transform = "translateX(0%)"

    scriptDock.style.bottom = "-10%"
    casesDock.style.bottom = "-10%"
    settingsDock.style.bottom = `${LaCaseDockHeight}px`

    scriptInput.blur()
    LaCaseIndex++
    LaCaseIsDockEnable = true
}
function displayNumworks(){
    if (LaCaseIsNumworksEnable){
        numworks.style.top = "-100%"
        LaCaseIsNumworksEnable = false
    }
    else{
        numworks.style.top = "0"
        LaCaseIsNumworksEnable = true
    }
}

//functions de rendus
function scriptRender(scriptValue){
    scriptInput.blur()
    //Réinitialisation du tableau et récupération du script
    cases.innerHTML = ""
    let lines = scriptValue.split("\n")

    //Rendu des éléments
    for (let i = 0; i < lines.length; i++){
        //Couche d'abstraction des éléments de cases
        let lastCase = cases.children[cases.children.length - 1]
        
        //ELEMENTS DE PREMIERE COUCHE D'ABSTRACTION (case)
        //Ajout d'une case
        if (lines[i] == "La"){
            let newCase = document.createElement("div")
            newCase.setAttribute("class", "case")
            cases.appendChild(newCase)
            LaCaseJustText = false
        }
        //Ajout d'un saut de ligne
        else if (lines[i] == "br"){
            let newBreak = document.createElement("br")
            lastCase.append(newBreak)
            LaCaseJustText = false
        }
        else if (lines[i][0] == "I"){
            let newImageContainer = document.createElement("div")
            newImageContainer.setAttribute("class","image")
            let newImage = document.createElement("img")
            newImage.setAttribute("width", `${lines[i].split(" ")[1]}`)
            newImage.setAttribute("src", `${lines[i].split(" ")[2]}`)
            newImageContainer.appendChild(newImage)
            lastCase.appendChild(newImageContainer)
        }
        //Emboîter
        else if (lines[i] == "B"){
            lastCase.className = `${lastCase.className} caseBoxed`
        }
        //Centrer du text
        else if (lines[i] == "C"){
            if (lastCase.children[lastCase.children.length - 1].className == "justText"){
                lastCase.children[lastCase.children.length - 1].className = `${lastCase.children[lastCase.children.length - 1].className} justTextCentered`
            }
        }
        //ELEMENTS DE SECONDE COUCHE D'ABSTRACTION (sous une case)
        //Mise en place de la seconde couche d'abstraction (de texte) si non disponible
        else if (lines[i][0] == "T" || lines[i][0] == "G" || lines[i][0] == "M"){
            if (!LaCaseJustText){
                let newJustText = document.createElement("div")
                newJustText.setAttribute("class", "justText")
                lastCase.appendChild(newJustText)
                LaCaseJustText = true
            }

            //Ajout d'une simplification d'écriture une fois sûr que justText est mis en place
            let lastElementOfLastCase = lastCase.children[lastCase.children.length - 1]
            
            //Ajout d'un texte
            if (lines[i][0] == "T"){
                let newText = document.createElement("h2")
                newText.innerText = lines[i].slice(2,lines[i].length)
                lastElementOfLastCase.appendChild(newText) // ajouter au dernier élément de justText
            }
            //Ajout d'un titre (grand texte)
            else if (lines[i][0] == "G"){
                let newText = document.createElement("h1")
                newText.innerText = lines[i].slice(2,lines[i].length)
                lastElementOfLastCase.appendChild(newText)
                // même chose que avec "T", mais avec h1 au lieu de h2
            }
            //Ajout d'une formule mathématiques
            else if (lines[i][0] == "M"){
                let newMath = document.createElement("h2")
                katex.render(lines[i].slice(2,lines[i].length), newMath, {
                    throwOnError : true,
                    displayMode : true,
                })
                // For more details : https://katex.org/docs/api
                lastElementOfLastCase.appendChild(newMath)
            }
        }
    }
}

scriptInput.addEventListener("keydown", (event) => {
    if (event.shiftKey && event.key == "Enter"){
        scriptRender(scriptInput.value)
    }
})

//Raccourcis fenêtres
window.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key == "ArrowLeft"){
        if (LaCaseIndex == 0){
            go2Script()
        } else if (LaCaseIndex == 1){
            go2Cases()
        }
    }
    if (event.ctrlKey && event.key == "ArrowRight"){
        if (LaCaseIndex == -1){
            go2Cases()
        } else if (LaCaseIndex == 0){
            go2Settings()
        }
    }
    //Enlever et remettre le dock
    if (event.ctrlKey && event.altKey && event.key == "h"){
        if (LaCaseIsDockEnable){
            scriptDock.style.bottom = "-10%"
            casesDock.style.bottom = "-10%"
            settingsDock.style.bottom = "-10%"
            LaCaseIsDockEnable = false
        }
        else{
            if (LaCaseIndex == -1){
                scriptDock.style.bottom = `${LaCaseDockHeight}px`
                casesDock.style.bottom = "-10%"
                settingsDock.style.bottom = "-10%"
            }
            else if (LaCaseIndex == 0){
                scriptDock.style.bottom = "-10%"
                casesDock.style.bottom = `${LaCaseDockHeight}px`
                settingsDock.style.bottom = "-10%"
            }
            else if (LaCaseIndex == 1){
                scriptDock.style.bottom = "-10%"
                casesDock.style.bottom = "-10%"
                settingsDock.style.bottom = `${LaCaseDockHeight}px`
            }
            LaCaseIsDockEnable = true
        }
    }
    if (event.ctrlKey && event.altKey && event.key == "n"){
        displayNumworks()
    }
})

//Raccourci boutons
casesButtonScript.addEventListener("click", () => {
    go2Cases()
})
casesButtonSettings.addEventListener("click", () => {
    go2Cases()
})
scriptButton.addEventListener("click", () => {
    go2Script()
})
settingsButton.addEventListener("click", () => {
    go2Settings()
})
numworksButton.addEventListener("click", () => {
    displayNumworks()
})
renderButton.addEventListener("click", () => {
    scriptRender(scriptInput.value)
})

//géré problème dock et raccourcis clavier, gérer les indexes directement dans les fonctions