import { ReactNode } from "react"

interface ButtonInterface {
    children? : ReactNode
    color1? : string
    color2? : string
    complements? : string
    action? : () => void
}

const Button = (prop : ButtonInterface) => {
    return (
        <button onClick={prop.action}
        className={`p-3 m-2 text-4xl rounded-md items-center font-light ${prop.complements}`}
        style={
            {
                color : prop.color1,
                backgroundColor : prop.color2
            }
        }
        >{prop.children}</button>
    )
}

export default Button