import { ReactNode } from "react"

interface WindowInterface{
    children? : ReactNode
    complements? : string
    originIndex : number
    windowIndex : number
}

const Window = (prop : WindowInterface) => {
    return (
        <div 
            className={
                `${prop.complements ? prop.complements : ""} 
                absolute
                w-full h-full
                duration-500`
            }

            style={
                {
                    transform : `translate(${((prop.originIndex + prop.windowIndex) * 105).toString()}%,0px)`
                }
            }
        >{prop.children}</div>
    )
}

export default Window