import Button from "../Button";
import CustomButtonInterface from "../../../Interfaces/ButtonInterfaces/CustomButtonInterface";

const GoToSettings = (originIndex : number, setOriginIndex : (newValue : number) => void) => {
    if (originIndex == 0){
        setOriginIndex(-1)
    }
}

interface GoToSettingsButtonInterface extends CustomButtonInterface {
    originIndex : number
    setOriginIndex : (newValue : number) => void
}


const GoToSettingsButton = (prop : GoToSettingsButtonInterface) => {
    return (
        <Button action={() => GoToSettings(prop.originIndex, prop.setOriginIndex)} color1={prop.color1} color2={prop.color2} children="⛭"/>
    )
}

export default GoToSettingsButton