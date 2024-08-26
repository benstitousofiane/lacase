import ColorInput from "./ColorInput"

interface SettingsInputInterface {
    color1 : string
    setColor1 : (newValue : string) => void
    color2 : string
    setColor2 : (newValue : string) => void
}

const SettingsInput = (prop : SettingsInputInterface) => {
    return (
        <div className="fixed w-full flex justify-center">
            <div className="w-[95vw] h-[90vh] rounded mt-3 p-2" style={{color : prop.color1,backgroundColor : prop.color2}}>
                <div id="colorSettings" className="flex items-center justify-center">
                    <ColorInput children="Color 1" color={prop.color1} setColor={prop.setColor1}/>
                    <ColorInput children="Color 2" color={prop.color2} setColor={prop.setColor2}/>
                </div>
            </div>
        </div>
    )
}

export default SettingsInput