import { ReactNode } from "react"

interface DockInterface {
    children : ReactNode
    originIndex? : number
    windowIndex : number
}

const Dock = (prop : DockInterface) =>{
    return (
        <div className={`fixed ${prop.originIndex == prop.windowIndex ? "bottom-5" : "bottom-[-10%]"} h-10 w-full flex justify-center items-center duration-500`}>
            {prop.children}
        </div>
    )
}

export default Dock