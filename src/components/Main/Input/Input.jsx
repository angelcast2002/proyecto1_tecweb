import React from "react"
import TextareaAutosize from "react-textarea-autosize"
import {
  NavBar,
  DivBotonRespuesta,
  BotonRespuesta,
  DivTextArea,
  BotonTextArea,
  TextDerechosGPT,
  TextAreaAutoSizeComponent,
} from "./Input.module.css"

const Input = () => {
  return (
    <div className={NavBar}>
      <form>
        <div>
          <div className={DivBotonRespuesta}>
            <button type="button" className={BotonRespuesta}>
              <div>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="1 4 1 10 7 10" />
                  <polyline points="23 20 23 14 17 14" />
                  <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
                </svg>
                <span>Regenerate response</span>
              </div>
            </button>
          </div>
          <div className={DivTextArea}>
            <TextareaAutosize
              className={TextAreaAutoSizeComponent}
              placeholder="Send a message..."
              minRows={1}
              maxRows={8.33333}
            />
            <button type="button" className={BotonTextArea}>
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
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      </form>
      <div className={TextDerechosGPT}>
        <span>
          <a
            href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
            target="_blank"
            rel="noreferrer"
          >
            ChatGPT Mar 23 Version
          </a>
          . Free Research Preview. ChatGPT may produce inaccurate information
          about people, places, or facts
        </span>
      </div>
    </div>
  )
}

export default Input
