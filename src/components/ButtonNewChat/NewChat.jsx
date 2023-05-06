import React from "react"
import PropTypes from "prop-types"
import { NewChat } from "./NewChat.module.css"

const ButtonNewChat = ({ text, textColor, backgroundColor }) => {
  const buttonTextColor = {
    color: textColor,
    backgroundColor,
  }
  return (
    <div className={NewChat} style={buttonTextColor}>
      <svg
        data-testid="newChatSvg"
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
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
      {text}
    </div>
  )
}

ButtonNewChat.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
}

export default ButtonNewChat
