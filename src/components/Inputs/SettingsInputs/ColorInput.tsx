interface ColorInputInterface {
    children : string
    color : string
    setColor : (newValue : string) => void
}

const ColorInput = (prop : ColorInputInterface) => {
    const sendColorInputValue = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = event.currentTarget
        const formData = new FormData(form)
        const ColorInputValue = formData.get("ColorInputValue")?.toString()
        if (ColorInputValue){
            prop.setColor(ColorInputValue)
        }
    }

    return (
        <>
            <div className="flex flex-col items-center">
                <form className="text-center" onChange={sendColorInputValue}>
                    <input name="ColorInputValue" type="color" value={prop.color} className="rounded outline-none w-32 h-20 m-2"/>
                    <p>{prop.children}</p>
                </form>
            </div>
        </>
    )
}

export default ColorInput