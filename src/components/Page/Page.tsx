import React, { PropsWithChildren } from 'react'
import { NavBar } from '../NavBar'
import { Footer, FooterText, MainContent } from './styles'

const Page = (props: PropsWithChildren) => {
  return (
    <>
      <NavBar />
      <MainContent>{props.children}</MainContent>
      <Footer>
        <FooterText>&copy; 2023 Vueling Entertainment</FooterText>
      </Footer>
    </>
  )
}

export default Page
