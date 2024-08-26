import CustomButtonInterface from "../../Interfaces/ButtonInterfaces/CustomButtonInterface"

import Dock from "./Dock"
import GoToScriptButton from "../Buttons/SheetButtons/GoToScriptButton"
import GoToSettingsButton from "../Buttons/SheetButtons/GoToSettingsButton"
import NumWorksButton from "../Buttons/SheetButtons/NumWorksButton"

interface SheetDockInterface extends CustomButtonInterface {
    originIndex : number
    setOriginIndex : (newValue : number) => void
    enableNumworks : boolean
    setEnableNumworks : (newValue : boolean) => void
}

const SheetDock = (prop : SheetDockInterface) => {
    return (
        <Dock originIndex={prop.originIndex} windowIndex={0}>
            <GoToScriptButton originIndex={prop.originIndex} setOriginIndex={prop.setOriginIndex} color1={prop.color1} color2={prop.color2}/>
            <NumWorksButton enableNumworks={prop.enableNumworks} setEnableNumworks={prop.setEnableNumworks} color1={prop.color1} color2={prop.color2}/>
            <GoToSettingsButton originIndex={prop.originIndex} setOriginIndex={prop.setOriginIndex} color1={prop.color1} color2={prop.color2}/>
        </Dock>
    )
}

export default SheetDock