import { ReactNode } from "react"

interface RenderButtonInterface {
    children : ReactNode | string
    complements? : string
}

const Render = (prop : RenderButtonInterface) => {
    return (
        <div className={`${prop.complements} text-2xl m-2 ml-1`}>{prop.children}</div>
    )
}

export default Render

