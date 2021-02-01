import React from "react"
import { Checkbox } from "./Checkbox"
import "./CustomList.css"
import icon from "../../pubic/chocolate-bar.svg"
import { CustomListIcon } from "./CustomListIcon"
import { CustomListActions } from "./CustomListActions"
import { CustomListCounter } from "./CustomListCounter"
import tw from "twin.macro"

export const CustomList: React.FC<{ itemList: [string, string][] }> = ({ itemList }) => {
  return (
    <ul className="custom-list">
      {itemList.map((item, index) => {
        const [itemText, iconSrc] = item
        return (
          <li className="custom-list-item" key={itemText + "_" + index}>
            <CustomListIcon>
              <img
                src={iconSrc}
                alt={itemText}
                style={{ height: "50%" }}
                height="100%"
                width="100%"
              />
            </CustomListIcon>
            <div className="list-item-part">
              <CustomListActions item={itemText} />
            </div>
            <div className="list-item-part">
              <CustomListText>{itemText}</CustomListText>
            </div>
            <div className="list-item-part">
              <CustomListCounter item={itemText} />
            </div>
          </li>
        )
      })}
    </ul>
  )
}

const CustomListText: React.FC = ({ children }) => {
  const Wrapper = tw.div`text-left  w-full`
  return <Wrapper>{children}</Wrapper>
}
