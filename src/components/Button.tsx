import React from "react"
import PropTypes from "prop-types"
import "twin.macro"

interface PropsButton {
  color: string
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
/**
 *
 * Base Button Component
 */
export const Button: React.FC<PropsButton> = ({ children, color, onClick, disabled }) => {
  return (
    <button tw="bg-red-600" disabled={disabled} onClick={onClick} style={{ color: color }}>
      {children}
    </button>
  )
}

Button.propTypes = {
  /** The color for the button */
  color: PropTypes.string.isRequired,
  /** The size of the button */
  /** Disable button */
  disabled: PropTypes.bool,
  /** Gets called when the user clicks on the button */
  onClick: PropTypes.func,
}
Button.defaultProps = {
  color: "#333",
  onClick: (event) => {
    // eslint-disable-next-line no-console
    console.log("You have clicked me!", event.target)
  },
}
