import Button from "../Button";
import CustomButtonInterface from "../../../Interfaces/ButtonInterfaces/CustomButtonInterface";
import { ReactNode } from "react";


import TextRender from "../../Renders/TextRender";
import MathRender from "../../Renders/MathRender";
import UnderLineRender from "../../Renders/UnderlineRender";
import ImageRender from "../../Renders/ImageRender";

interface caseStyleInterface{
    color? : string
    backgroundColor? : string
    border? : string
    margin? : string
    padding? : string
    borderRadius? : string
    display? : string
    alignItems? : string
    justifyContent? : string
    flexWrap? : "wrap"
    flexDirection? : "column"
}

const render = (scriptInputValue : string, setScriptOutput : (newValue : ReactNode) => void, color1 : string, color2 : string) => {
    const caseContent : ReactNode[] 
                      = []

    let caseTemp      : ReactNode[] 
                      = []
                      
    let caseStyle     : caseStyleInterface = {}

    for (const line of scriptInputValue.split("\n")){
        if (line.split(" ")[0] != ""){

            switch (line.split(" ")[0]){
                // --- Case ---
                case "L":
                    caseStyle = {
                        color : color2,
                        backgroundColor : color1,
                        display : "flex",
                        alignItems : "center",
                        flexWrap : "wrap",
                        margin : "20px"
                    }
                    break
                case "LC" :
                    caseStyle = {
                        color : color2,
                        backgroundColor : color1,
                        display : "flex",
                        alignItems : "center",
                        flexWrap : "wrap",
                        margin : "20px",
                        justifyContent : "center",
                        flexDirection : "column"
                    }
                    break

                case "LFB":
                    caseStyle = {
                        color : color1,
                        backgroundColor : color2,
                        borderRadius : "0.375rem",
                        padding : "20px",
                        display : "flex",
                        alignItems : "center",
                        flexWrap : "wrap",
                        margin : "20px"
                    }
                    break

                case "LPB":
                    caseStyle = {
                        border : `3px ${color2} solid`,
                        color : color2,
                        backgroundColor : color1,
                        borderRadius : "0.375rem",
                        padding : "20px",
                        display : "flex",
                        alignItems : "center",
                        flexWrap : "wrap",
                        margin : "20px"
                    }
                    break

                // --- Texte ---

                case "T":
                    caseTemp.push(<TextRender text={line.slice(2, line.length)}/>)
                    break

                case "U":
                    caseTemp.push(<UnderLineRender text={line.slice(2, line.length)}/>)
                    break
                    
                    case "M":
                    caseTemp.push(<MathRender formula={line.slice(2, line.length)}/>)
                    break
                
                // --- Media ---
                case "I":
                    caseTemp.push(<ImageRender width={line.split(" ")[1]} src={line.split(" ")[2]} />)
                    break
                
                // --- Echapeur ---
                
                case "br":
                    caseTemp.push(<div className="w-full"></div> )
                    break

                case "E":
                    caseContent.push(
                        <div style={caseStyle}>
                            {caseTemp.map((temp) => temp)}
                        </div> 
                    )
                    caseTemp = []
            }

        }
    }
    

    //mettre des ternaires sur le style de la div
    // caseContent.push(caseTemp.map((temp, index) => <div style={caseStyle} key={index}>{temp}</div>))
    // caseContent.push(caseTemp.map((temp, index) => <div style={caseStyle} key={index}>{temp}</div>))



    setScriptOutput(
        <>
            {caseContent.map((renderedElement, index) => (
                <div key={index}>
                    {renderedElement}
                </div>
            ))}
        </>
    );
}

interface RenderButtonInterface extends CustomButtonInterface {
    scriptInputValue : string
    setScriptOutput : (newValue : ReactNode) => void
}

const RenderButton = (prop : RenderButtonInterface) => {
    return (
        <Button action={() => render(prop.scriptInputValue, prop.setScriptOutput, prop.color1, prop.color2)} color1={prop.color1} color2={prop.color2} children="▶"></Button>
    )
}

export default RenderButton