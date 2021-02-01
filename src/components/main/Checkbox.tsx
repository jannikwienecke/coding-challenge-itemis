import React from "react"
import tw from "twin.macro"

export const Checkbox: React.FC<{
  checked?: boolean
  add: () => void
  remove: () => void
}> = ({ checked, add, remove }) => {
  const Wrapper = tw.div`flex flex-col h-full justify-center items-center cursor-pointer`
  const MyCheckbox = tw.div`w-7 h-5/6 border-red-400 bg-transparent border-2 mr-4 p-1`
  const Content = tw.button`flex w-full h-full bg-red-300 `

  const handleClick = () => {
    if (checked) {
      remove()
    } else {
      add()
    }
  }
  return (
    <Wrapper onClick={handleClick}>
      <MyCheckbox>{checked ? <Content /> : null}</MyCheckbox>
    </Wrapper>
  )
}
