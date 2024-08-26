import { ReactNode } from "react"

interface scriptOutputInterface {
    scriptOutput : ReactNode
}

const ScriptOutput = (prop : scriptOutputInterface) => {
    return (
        <div className="w-full h-full flex justify-center items-center p-3">
            <div className="w-[85vw] h-full">
                {prop.scriptOutput}
            </div>
        </div>
    )
}

export default ScriptOutput