import { Dispatch, SetStateAction } from "react";

export interface buttonType{
    children: string,
    variant: 'primary'|'secondary'| 'grey',
    onClick?: ()=>void,
    onChange?:(value:React.ChangeEvent<HTMLInputElement>)=>void,
    setText?:void|Dispatch<SetStateAction<string>>,
    text?: string
}

