import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { BotonScroll } from "./ButtonScroll.module.css"

const ButtonScroll = ({ parentRef }) => {
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = parentRef.current
      if (scrollTop + clientHeight >= scrollHeight) {
        setShowTopBtn(false)
      } else {
        setShowTopBtn(true)
      }
    }

    parentRef.current.addEventListener("scroll", handleScroll)

    return () => {
      parentRef.current.removeEventListener("scroll", handleScroll)
    }
  }, [parentRef])

  const scrollToBottom = () => {
    parentRef.current.scroll({
      top: parentRef.current.scrollHeight,
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

ButtonScroll.propTypes = {
  parentRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
}
