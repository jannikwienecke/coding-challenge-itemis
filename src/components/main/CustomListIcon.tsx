import React from "react"
import tw from "twin.macro"

export const CustomListIcon: React.FC = ({ children }) => {
  const Wrapper = tw.div`flex h-full items-center w-1/4`
  return <Wrapper>{children}</Wrapper>
}
