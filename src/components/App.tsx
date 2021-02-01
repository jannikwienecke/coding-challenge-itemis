import React from "react"
import logo from "../pubic/shopping.svg"
import { AppWrapper } from "./AppWrapper"
import { Content } from "./layout/Content"
import { MainContent } from "./layout/MainContent"
import { MainHeadline } from "./layout/MainHeadline"
import { MainWrapper } from "./layout/MainWrapper"
import { NavHeadline } from "./layout/NavHeadline"
import { NavLogo } from "./layout/NavLogo"
import { NavWrapper } from "./layout/NavWrapper"
import { SideContent } from "./layout/SideContent"
import { SideHeadline } from "./layout/SideHeadline"
import { SideProductList } from "./layout/SideProductList"
import { SideSummary } from "./layout/SideSummary"
import { ProductSelection } from "./main/ProductSelection"
import { CheckoutSummary } from "./side/CheckoutSummary"
import { ShoppingCard } from "./side/ShoppingCard"

const App: React.FC = () => {
  return (
    <div className="App">
      <AppWrapper>
        <NavWrapper>
          <NavLogo>
            <img src={logo} style={{ height: "60%" }} />
          </NavLogo>
          <NavHeadline>
            Coding assignments for itemis Web-Engineering department recruiting - SALES TAXES
          </NavHeadline>
        </NavWrapper>
        <MainWrapper>
          <MainContent>
            <MainHeadline>Product Selection</MainHeadline>
            <Content>
              <ProductSelection />
            </Content>
          </MainContent>
          <SideContent>
            <SideHeadline>Order Summary</SideHeadline>
            <SideProductList>
              <ShoppingCard />
            </SideProductList>
            <SideSummary>
              <CheckoutSummary />
            </SideSummary>
          </SideContent>
        </MainWrapper>
      </AppWrapper>
    </div>
  )
}

export default App
