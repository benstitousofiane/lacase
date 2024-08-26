import Button from "../Button";
import CustomButtonInterface from "../../../Interfaces/ButtonInterfaces/CustomButtonInterface";

const GoToSheetFromSettings = (originIndex : number, setOriginIndex : (newValue : number) => void) => {
    if (originIndex == -1){
        setOriginIndex(0)
    }
}

interface GoToSheetFromSettingsButtonInterface extends CustomButtonInterface {
    originIndex : number
    setOriginIndex : (newValue : number) => void
}


const GoToSheetFromSettingsButton = (prop : GoToSheetFromSettingsButtonInterface) => {
    return (
        <Button action={() => GoToSheetFromSettings(prop.originIndex, prop.setOriginIndex)} color1={prop.color1} color2={prop.color2} children="←"/>
    )
}

export default GoToSheetFromSettingsButton