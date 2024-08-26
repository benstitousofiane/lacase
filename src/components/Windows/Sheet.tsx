import CustomWindowInterface from "../../Interfaces/WindowInterfaces/CustomWindowInterface";

import Window from "./Window";

const Sheet = (prop:CustomWindowInterface) => {
    return (
        <Window originIndex={prop.originIndex} windowIndex={0}>{prop.children}</Window>
    )
}

export default Sheet