import { FC } from "react"
import { IHeader } from "./types"
import tw from "tailwind-styled-components"
import Logo from "./logo/logo"

const Header: FC<IHeader> = () => {
 return (
  <Head >
  <Logo />
   <span>World</span>
  </Head>
 )
}

const Head = tw.header`
flex-center-between
border
border-b-2
border-white
py-4
px-2

`

export default Header