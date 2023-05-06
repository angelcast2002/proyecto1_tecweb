import React from "react"
import {
  DivGeneralUsuario,
  DivImagenUsuario,
  DivSVGUsuario,
  RespuestaUsuario,
  SvgOcultable,
} from "./Respuesta.module.css"
import {
  RespuestaGTP,
  DivGeneralGPT,
  DivImagen,
  DivSVG,
  DivGeneral,
} from "./RespuestaChat.module.css"
import ImgDivRespuesta from "./ImgRespuesta"

const TextosRespuesta = {
  Humano: [
    "Como puedo centrar un div?",
    "Como cambio el color de fondo de un div?",
  ],
  GTP: [
    "Para centrar un div horizontalmente y verticalmente, puedes utilizar las siguientes propiedades de CSS:",
    "./src/assets/codigo1.png",
    "Esto centra el elemento div en el medio de su contenedor en ambas direcciones." +
      " Asegúrate de que el contenedor del div tenga una posición relativa o absoluta" +
      " para que el posicionamiento sea correcto.",
    "Para cambiar el color de fondo de un div en CSS, puedes usar la propiedad background-color." +
      " Por ejemplo, si quieres establecer el color de fondo de un div a rojo, puedes hacer lo siguiente:",
    "./src/assets/codigo2.png",
    "Esto establece el color de fondo de un div a rojo.",
  ],
}

const DivRespuesta = () => {
  return (
    <div className={DivGeneral}>
      <div className={DivGeneralUsuario}>
        <div className={DivImagenUsuario}>
          <img src="./src/assets/imgUsuario.png" alt="cas21700@uvg.edu.gt" />
        </div>
        <div className={RespuestaUsuario}>
          <p>{TextosRespuesta.Humano[0]}</p>
        </div>
        <div className={DivSVGUsuario}>
          <button type="button">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={SvgOcultable}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </button>
        </div>
      </div>

      <div className={DivGeneralGPT}>
        <div className={DivImagen}>
          <img src="./src/assets/imgChatGpt.png" alt="cas21700@uvg.edu.gt" />
        </div>
        <div className={RespuestaGTP}>
          <p>{TextosRespuesta.GTP[0]}</p>
          <ImgDivRespuesta img={TextosRespuesta.GTP[1]} />
          <p>{TextosRespuesta.GTP[2]}</p>
        </div>
        <div className={DivSVG}>
          <button type="button">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 
                0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
              />
            </svg>
          </button>
          <button type="button">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 
                2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={DivGeneralUsuario}>
        <div className={DivImagenUsuario}>
          <img src="./src/assets/imgUsuario.png" alt="cas21700@uvg.edu.gt" />
        </div>
        <div className={RespuestaUsuario}>
          <p>{TextosRespuesta.Humano[1]}</p>
        </div>
        <div className={DivSVGUsuario}>
          <button type="button">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={SvgOcultable}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </button>
        </div>
      </div>
      <div className={DivGeneralGPT}>
        <div className={DivImagen}>
          <img src="./src/assets/imgChatGpt.png" alt="cas21700@uvg.edu.gt" />
        </div>
        <div className={RespuestaGTP}>
          <p>{TextosRespuesta.GTP[3]}</p>
          <ImgDivRespuesta img={TextosRespuesta.GTP[4]} />
          <p>{TextosRespuesta.GTP[5]}</p>
        </div>
        <div className={DivSVG}>
          <button type="button">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 
                0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
              />
            </svg>
          </button>
          <button type="button">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 
                2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DivRespuesta
