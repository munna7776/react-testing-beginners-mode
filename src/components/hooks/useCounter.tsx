import { useState } from "react"

export const useCounter = (initialCount: 0) => {
    const [count, setCount] = useState(initialCount || 0)
    const increment = () => setCount(count+1)
    const decrement = () => setCount(count-1)
    return {count, increment, decrement}
}