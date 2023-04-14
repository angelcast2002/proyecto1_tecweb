import React from "react"
import { Main } from "./Main.module.css"
import DivRespuesta from "./Respuestas/Respuesta"
import Input from "./Input/Input"
import ButtonScroll from "./ButtonScroll/ButtonScroll"

const DivMain = () => {
  return (
    <div className={Main}>
      <ButtonScroll />
      <DivRespuesta />
      <Input />
    </div>
  )
}

export default DivMain
