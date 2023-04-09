import React from "react"
import { Main } from "./Main.module.css"
import DivRespuesta from "./Respuestas/Respuesta"

const DivMain = () => {
  return (
    <div className={Main}>
      <DivRespuesta />
    </div>
  )
}

export default DivMain
