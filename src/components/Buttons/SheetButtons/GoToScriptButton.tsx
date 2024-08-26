import CustomButtonInterface from "../../../Interfaces/ButtonInterfaces/CustomButtonInterface";
import Button from "../Button";


const GoToScript = (originIndex : number, setOriginIndex : (newValue : number) => void) => {
    if (originIndex == 0){
        setOriginIndex(1)
    }
}

interface GoToScriptButtonInterface extends CustomButtonInterface {
    originIndex : number
    setOriginIndex : (newValue : number) => void
}


const GoToScriptButton = (prop : GoToScriptButtonInterface) => {
    return (
        <Button action={() => GoToScript(prop.originIndex, prop.setOriginIndex)} color1={prop.color1} color2={prop.color2} children=">-<"/>
    )
}

export default GoToScriptButton