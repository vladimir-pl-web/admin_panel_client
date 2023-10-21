import { IMovie } from "../movie"
import { IUser } from "../user"

export interface IReview{
 id:number
 user: IUser
 movie:IMovie
 text: string
 ecaluation: number
}