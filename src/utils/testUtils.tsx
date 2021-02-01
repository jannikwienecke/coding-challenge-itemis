import React from "react"
import { render } from "@testing-library/react"
import { DEFAULT_GLOBAL_STATE, GlobalStoreProvider } from "store/StateProvider"
import { useGlobalStore } from "hooks/useGlobalStore"

export const useCustomRender = (ui: React.ReactNode) => {
  let globalState = { current: DEFAULT_GLOBAL_STATE }
  const TestComponent = () => {
    globalState.current = useGlobalStore()
    return null
  }

  const renderResult = render(
    <GlobalStoreProvider>
      {
        <div>
          <TestComponent />
          {ui}
        </div>
      }
    </GlobalStoreProvider>
  )

  return { ...renderResult, globalState }
}
