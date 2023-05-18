import {useState} from "react"

export const useCounter =(initialState)=>{
    const [value, setValue] = useState(initialState)

    const [a, setA] = useState("")

    const increment = () => setValue((q) => q + 1)
    const decrement = () => setValue((q) => q - 1)
    const reset = () => setValue(0)

    return {increment, decrement, reset, value,a, setA}

}