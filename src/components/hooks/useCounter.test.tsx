import {render, renderHook, screen} from "@testing-library/react"
import { useCounter } from "./useCounter"

describe("useCounter", ()=>{
    test("counter of initial count - 0", () => {
        const { result } = renderHook(useCounter)
        expect(result.current.count).toBe(0)
    })
})