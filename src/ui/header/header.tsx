import { FC } from "react"
import { IHeader } from "./types"
import tw from "tailwind-styled-components"

const Header: FC<IHeader> = () => {
 return (
  <Head className="flex-center-between">
   <span>Hello</span>
   <span>World</span>
  </Head>
 )
}

const Head = tw.header`,
`

export default Header