import React from "react"
import { Main } from "./Main.module.css"
import DivRespuesta from "./Respuestas/Respuesta"
import Input from "./Input/Input"

const DivMain = () => {
  return (
    <div className={Main}>
      <DivRespuesta />
      <Input />
    </div>
  )
}

export default DivMain
