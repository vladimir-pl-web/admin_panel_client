import { IReview } from "./review/review"

export interface IMovie{
 id:number
 name: string
 duration: number
 description: string
 rating: number
 poster:string
 views: number
 reviews?: IReview[]
 fees:number
}