import React from "react"
import { GlobalContext } from "../store/StateProvider"

export function useGlobalStore() {
  const context = React.useContext(GlobalContext)
  if (context === undefined) {
    throw new Error(`useGlobalStore must be used within a GlobalStoreProvider`)
  }
  return context
}
