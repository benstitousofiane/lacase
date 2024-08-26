import CustomWindowInterface from "../../Interfaces/WindowInterfaces/CustomWindowInterface";

import Window from "./Window";

const Settings = (prop:CustomWindowInterface) => {
    return (
        <Window originIndex={prop.originIndex} windowIndex={1}>{prop.children}</Window>
    )
}

export default Settings