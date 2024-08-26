import Render from "./Render"
import { InlineMath } from "react-katex"

interface MathRenderInterface {
    formula : string
}

const MathRender = (prop : MathRenderInterface) =>{
    return (
        <Render children={<InlineMath math={`\\displaystyle ${prop.formula}`}/>}/>
    )
}

export default MathRender