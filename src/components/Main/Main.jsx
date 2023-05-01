import React, { useRef } from "react"
import { Main } from "./Main.module.css"
import DivRespuesta from "./Respuestas/Respuesta"
import Input from "./Input/Input"
import ButtonScroll from "./ButtonScroll/ButtonScroll"

const DivMain = () => {
  const divRef = useRef(null)

  return (
    <div className={Main} ref={divRef}>
      <ButtonScroll parentRef={divRef} />
      <DivRespuesta />
      <Input />
    </div>
  )
}

export default DivMain
