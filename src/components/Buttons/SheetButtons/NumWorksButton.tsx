import Button from "../Button";
import CustomButtonInterface from "../../../Interfaces/ButtonInterfaces/CustomButtonInterface";

const pullNumworks = (enableNumworks : boolean, setEnableNumWorks : (newValue : boolean) => void) => {
    if (enableNumworks){
        setEnableNumWorks(false)
    } else {
        setEnableNumWorks(true)  
    }
}

interface NumWorksButtonInterface extends CustomButtonInterface{
    enableNumworks : boolean
    setEnableNumworks : (newValue : boolean) => void
}

const NumWorksButton = (prop : NumWorksButtonInterface) => {
    return (
        <Button action={() => pullNumworks(prop.enableNumworks, prop.setEnableNumworks)} color1={prop.color1} color2={prop.color2} children="N"/>
    )
}

export default NumWorksButton