import React from "react"
import "./App.css"
import LeftPanel3 from "./components/LeftPanel/LeftPanel3"
import Separador from "./components/Separador/Separador"
import ButtonNewChat from "./components/ButtonNewChat/NewChat"
import ChatIndividual from "./components/PastChats/Chat"
import DivMain from "./components/Main/Main"

function App() {
  return (
    <div className="app">
      <div className="fatherleftpanel">
        <ButtonNewChat />
        <ChatIndividual />
        <Separador />
        <LeftPanel3 />
      </div>
      <DivMain />
    </div>
  )
}

export default App
