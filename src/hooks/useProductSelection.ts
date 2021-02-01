import { useGlobalStore } from "hooks/useGlobalStore"
import React from "react"

export const useProductSelection = () => {
  const [activeTab, setActiveTab] = React.useState(0)
  const { favorites } = useGlobalStore()

  const tabRef = React.useRef<HTMLButtonElement | null>(null)

  React.useEffect(() => {
    if (favorites.length === 0 && activeTab === 4 && tabRef.current) {
      setActiveTab(0)
      tabRef.current.click()
    }
  }, [favorites, activeTab])

  return { tabRef, favorites, activeTab, setActiveTab }
}
