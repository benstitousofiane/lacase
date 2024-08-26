
interface ScriptInputInterface {
    color1? : string
    color2? : string
    setScriptInputValue : (newValue : string) => void
}

const ScriptInput = (prop : ScriptInputInterface) => {
    const sendScriptInputValue = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = event.currentTarget
        const formData = new FormData(form)
        const ScriptInputValue = formData.get("ScriptInputValue")?.toString()
        if (ScriptInputValue){
            prop.setScriptInputValue(ScriptInputValue)
        }
    }
    return (
        <div className="fixed w-full flex justify-center">
            <form onChange={sendScriptInputValue}>
                <textarea spellCheck={false} name="ScriptInputValue" 
                className="w-[95vw] h-[90vh] outline-none text-xl resize-none rounded mt-3 p-2"
                style={{color : prop.color1, backgroundColor : prop.color2}}/>
            </form>
        </div>
    )
}

export default ScriptInput