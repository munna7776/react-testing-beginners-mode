import {renderHook} from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { useCounter } from "./useCounter"

describe("useCounter", ()=>{
    test("counter of initial count - 0", () => {
        const { result } = renderHook(useCounter)
        expect(result.current.count).toBe(0)
    })

    test("count should be 10 if initialCount is 10", ()=>{
        const { result } = renderHook(useCounter, {
            initialProps: {
                initialCount: 10
            }
        })
        expect(result.current.count).toBe(10)
    })

    test("on increment, count should be 11", ()=>{
        const { result } = renderHook(useCounter, {
            initialProps: {
                initialCount: 10
            }
        })
        act(()=>result.current.increment())
        expect(result.current.count).toBe(11)
    })

    test("on decrement, count should be 9", ()=>{
        const { result } = renderHook(useCounter, {
            initialProps: {
                initialCount: 10
            }
        })
        act(()=>result.current.decrement())
        expect(result.current.count).toBe(9)
    })
})