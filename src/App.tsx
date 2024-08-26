import { ReactNode, useEffect, useState } from "react"

import Script from "./components/Windows/Script"
import Sheet from "./components/Windows/Sheet"
import Settings from "./components/Windows/Settings"

import ScriptDock from "./components/Docks/ScriptDock"
import SheetDock from "./components/Docks/SheetDock"
import SettingsDock from "./components/Docks/SettingsDock"

import ScriptInput from "./components/Inputs/ScriptInputs/ScriptInput"
import NumWorks from "./components/Inputs/SheetInputs/NumWorks"
import DefaultOutput from "./components/Outputs/SheetOutputs/DefaultOutput"
import SettingsInput from "./components/Inputs/SettingsInputs/SettingsInput"

import ScriptOutput from "./components/Outputs/SheetOutputs/ScriptOutput"

function App() {
  const [color1, setColor1] = useState("#38e168")
  const [color2, setColor2] = useState("#06170a")

  const [originIndex, setOriginIndex] = useState(0)
  const [enableNumWorks, setEnableNumWorks] = useState(false)

  const [scriptInputValue, setScriptInputValue] = useState("")
  const [scriptOutput, setScriptOutput] = useState<ReactNode>(
      <DefaultOutput children="Ecrivez quelque chose dans Script... (>-<)"/>
    )

  useEffect(() => {
    document.body.style.backgroundColor = color1
  })

  return (
    <>
      <Script originIndex={originIndex}>
        <ScriptInput setScriptInputValue={setScriptInputValue} color1={color1} color2={color2}></ScriptInput>
      </Script>

      <Sheet originIndex={originIndex}>
        <ScriptOutput scriptOutput={scriptOutput}/>
      </Sheet>

      <Settings originIndex={originIndex}>
        <SettingsInput color1={color1}  setColor1={setColor1} color2={color2} setColor2={setColor2}/>
      </Settings>


      <div id="dock">
        <ScriptDock scriptInputValue={scriptInputValue} setScriptOutput={setScriptOutput} originIndex={originIndex} setOriginIndex={setOriginIndex} color1={color1} color2={color2}/>
        <SheetDock originIndex={originIndex} setOriginIndex={setOriginIndex} enableNumworks={enableNumWorks} setEnableNumworks={setEnableNumWorks} color1={color1} color2={color2}/>
        <SettingsDock originIndex={originIndex} setOriginIndex={setOriginIndex} color1={color1} color2={color2}/>
      </div>

      <div id="tools">
        <NumWorks enableNumWorks={enableNumWorks}/>
      </div>

    </>
  )
}

export default App