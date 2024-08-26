import CustomButtonInterface from "../../Interfaces/ButtonInterfaces/CustomButtonInterface"

import Dock from "./Dock"
import GoToSheetFromSettingsButton from "../Buttons/SettingsButtons/GoToSheetFromSettingsButton"

interface SettingsDockInterface extends CustomButtonInterface {
    originIndex : number
    setOriginIndex : (newValue : number) => void
    
}

const SettingsDock = (prop : SettingsDockInterface) => {
    return (
        <Dock originIndex={prop.originIndex} windowIndex={-1}>
            <GoToSheetFromSettingsButton originIndex={prop.originIndex} setOriginIndex={prop.setOriginIndex} color1={prop.color1} color2={prop.color2}/>
        </Dock>
    )
}

export default SettingsDock