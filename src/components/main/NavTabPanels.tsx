import { TabPanels } from "@reach/tabs"
import React from "react"
import "./NavTabPanels.css"

export const NavTabPanels: React.FC = ({ children }) => {
  return <TabPanels className="tab-panels">{children}</TabPanels>
}
