import Render from "./Render"

interface UnderLineRenderInterface {
    text : string
}

const UnderLineRender = (prop : UnderLineRenderInterface) => {
    return (
        <Render complements="underline" children={prop.text}/>
    )
}

export default UnderLineRender