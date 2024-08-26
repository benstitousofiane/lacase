import { ReactNode } from "react"
import CustomButtonInterface from "../../Interfaces/ButtonInterfaces/CustomButtonInterface"

import Dock from "./Dock"
import GoToSheetFromScriptButton from "../Buttons/ScriptButtons/GoToSheetFromScriptButton"
import RenderButton from "../Buttons/ScriptButtons/RenderButton"


interface ScriptDockInterface extends CustomButtonInterface {
    originIndex : number
    setOriginIndex : (newValue : number) => void
    scriptInputValue : string
    setScriptOutput : (newValue : ReactNode) => void
}


const ScriptDock = (prop : ScriptDockInterface) => {
    return (
        <Dock originIndex={prop.originIndex} windowIndex={1}>
            <RenderButton scriptInputValue={prop.scriptInputValue} setScriptOutput={prop.setScriptOutput} color1={prop.color1} color2={prop.color2}/>
            <GoToSheetFromScriptButton originIndex={prop.originIndex} setOriginIndex={prop.setOriginIndex} color1={prop.color1} color2={prop.color2}/>
        </Dock>
    )
}

export default ScriptDock