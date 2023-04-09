import React from "react"
import PropTypes from "prop-types"
import { ImgRespuesta } from "./ImgRespuesta.module.css"

const ImgDivRespuesta = ({ img }) => {
  return (
    <div className={ImgRespuesta}>
      <div>
        <div>
          <span>css</span>
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
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
            </svg>
            Copy code
          </button>
        </div>
      </div>
      <div>
        <img src={img} alt="Imagen codigo" />
      </div>
    </div>
  )
}
ImgDivRespuesta.propTypes = {
  img: PropTypes.string.isRequired,
}

export default ImgDivRespuesta
