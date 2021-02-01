import { TabList } from "@reach/tabs"
import React from "react"
import "./NavTabList.css"

export const NavTabList: React.FC = ({ children }) => {
  return (
    <div>
      <TabList className="tab-list">{children}</TabList>
    </div>
  )
}
