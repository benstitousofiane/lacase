import Render from "./Render"

interface TextRenderInterface{
    text : string
}

const TextRender = (prop : TextRenderInterface) => {
    return (
        <Render children={prop.text}/>
    )
}

export default TextRender