import { Tab } from "@reach/tabs"
import React from "react"
import tw from "twin.macro"
import "./NavTab.css"

// export const NavTab: React.FC<{
//   isActive: boolean
//   setActive: () => void
// }> = ({ children, isActive, setActive }) => {
//   return (
//     <Tab onMouseDown={setActive} className={`single-tab ${isActive && "single-tab-active"}`}>
//       {children}
//     </Tab>
//   )
// }

type Props = { children: React.ReactNode; setActive: () => void; isActive: boolean }
export type Ref = HTMLButtonElement

export const NavTab = React.forwardRef<Ref, Props>((props, ref) => {
  return (
    <Tab
      ref={ref}
      onMouseDown={props.setActive}
      className={`single-tab ${props.isActive && "single-tab-active"}`}
    >
      {props.children}
    </Tab>
  )
})
