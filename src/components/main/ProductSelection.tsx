import { TabPanel, Tabs } from "@reach/tabs"
import React from "react"
import { DEFAULT_INPUT_1, DEFAULT_INPUT_2, DEFAULT_INPUT_3, INPUT_OPTIONS } from ".././../constants"
import { CustomList } from "./CustomList"
import { DefaultList } from "./DefaultList"
import { FavoriteList } from "./FavoriteList"
import { NavTab } from "./NavTab"
import { NavTabList } from "./NavTabList"
import { NavTabPanels } from "./NavTabPanels"
import "./ProductSelection.css"
import { useProductSelection } from "../../hooks/useProductSelection"

export const ProductSelection = () => {
  const { tabRef, favorites, activeTab, setActiveTab } = useProductSelection()
  return (
    <Tabs className="tabs">
      <NavTabList>
        <NavTab ref={tabRef} setActive={() => setActiveTab(0)} isActive={activeTab === 0}>
          All Items
        </NavTab>
        <NavTab setActive={() => setActiveTab(1)} isActive={activeTab === 1}>
          Shopping Cart 1
        </NavTab>
        <NavTab setActive={() => setActiveTab(2)} isActive={activeTab === 2}>
          Shopping Cart 2
        </NavTab>
        <NavTab setActive={() => setActiveTab(3)} isActive={activeTab === 3}>
          Shopping Cart 3
        </NavTab>
        {favorites.length > 0 && (
          <NavTab setActive={() => setActiveTab(4)} isActive={activeTab === 4}>
            Favorites
          </NavTab>
        )}
      </NavTabList>
      <NavTabPanels>
        <TabPanel className="tab-panel">
          <CustomList itemList={INPUT_OPTIONS} />
        </TabPanel>
        <TabPanel className="tab-panel">
          <DefaultList isActive={activeTab === 1} itemList={DEFAULT_INPUT_1} />
        </TabPanel>
        <TabPanel className="tab-panel">
          <DefaultList isActive={activeTab === 2} itemList={DEFAULT_INPUT_2} />
        </TabPanel>
        <TabPanel className="tab-panel">
          <DefaultList isActive={activeTab === 3} itemList={DEFAULT_INPUT_3} />
        </TabPanel>
        {favorites.length > 0 && (
          <TabPanel className="tab-panel">
            <FavoriteList />
          </TabPanel>
        )}
      </NavTabPanels>
    </Tabs>
  )
}
