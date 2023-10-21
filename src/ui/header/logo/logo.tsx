"use client"
import { FC } from "react"
import Image from 'next/image'
import { useRouter } from "next/navigation"
import tw from "tailwind-styled-components"

const Logo: FC = () => {
 const router = useRouter()
 const onRedirect = () => {
  router.push("/")
 }
 return (
  <Wrapper>
    <Image
      src="/logo/logo.svg"
      width={30}
      height={30}
      alt="logo"
      onClick={onRedirect}
   />
   <span>Top Movies</span>
   <StyledCorner/>
  </Wrapper>
)
}

const Wrapper = tw.div`
flex-center-between
px-2
py-1
gap-2
group
relative
rounded-lg
shadow-md
transition-all
duration-300
cursor-pointer
`
const StyledCorner = tw.div`
flex
items-center
justify-content-center
absolute
w-3
h-3
group-hover:h-full
group-hover:w-full
group-hover:rounded-lg
group-hover:bg-primary/50
transition-all
duration-300
top-0
right-0
bg-primary
rounded-bl-3xl
`;

export default Logo