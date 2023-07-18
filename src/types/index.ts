import { MouseEventHandler } from "react"

export interface CustomButtonProps{
    title:string
    containerstyle?:string
    handleclick?:MouseEventHandler<HTMLButtonElement>
}