"use client"
import { IUser } from "@/types/user";
import { Dispatch, FC, PropsWithChildren, SetStateAction, createContext, useState } from "react";

export type IAuthData = IUser | null
interface IContext  {
 user: IAuthData
 setUser: Dispatch<SetStateAction<IAuthData>>
}

export const AuthContext = createContext({} as IContext)



const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
 const [user, setUser] = useState<IAuthData>(null)
 return (
  <AuthContext.Provider value={{user,setUser}}>
   {children}
  </AuthContext.Provider>
 )
}

export default AuthProvider