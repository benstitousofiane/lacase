import Button from "../Button";
import CustomButtonInterface from "../../../Interfaces/ButtonInterfaces/CustomButtonInterface";


const GoToSheetFromScript = (originIndex : number, setOriginIndex : (newValue : number) => void) => {
    if (originIndex == 1){
        setOriginIndex(0)
    }
}

interface GoToSheetFromScriptButtonInterface extends CustomButtonInterface {
    originIndex : number
    setOriginIndex : (newValue : number) => void
}

const GoToSheetFromScriptButton = (prop : GoToSheetFromScriptButtonInterface) => {
    return (
        <Button action={() => GoToSheetFromScript(prop.originIndex, prop.setOriginIndex)} color1={prop.color1} color2={prop.color2} children="→"/>
    )
}

export default GoToSheetFromScriptButton