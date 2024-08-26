import CustomWindowInterface from "../../Interfaces/WindowInterfaces/CustomWindowInterface";

import Window from "./Window";

const Script = (prop:CustomWindowInterface) => {
    return (
        <Window originIndex={prop.originIndex} windowIndex={-1}>{prop.children}</Window>
    )
}

export default Script