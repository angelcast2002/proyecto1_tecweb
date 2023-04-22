import React, { useState, useEffect } from "react"
import { BotonScroll } from "./ButtonScroll.module.css"

const ButtonScroll = () => {
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY)
      if (window.scrollY < 50) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  }, [])
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    })
  }
  return (
    <div>
      {showTopBtn && (
        <button className={BotonScroll} type="button" onClick={scrollToBottom}>
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
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default ButtonScroll
