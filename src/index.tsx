import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./components/App"
import { GlobalStyles } from "twin.macro"
import { GlobalStoreProvider } from "store/StateProvider"
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <GlobalStoreProvider>
      <App />
    </GlobalStoreProvider>
  </React.StrictMode>,
  /* eslint no-undef: 0 */
  document.getElementById("root")
)
