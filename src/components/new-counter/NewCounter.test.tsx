import { render,screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import NewCounter from "./NewCounter"

describe("NewCounter", ()=>{
    test("NewCounter rendered correctly", ()=>{
        render(<NewCounter count={0} />)
        const headingTextElement = screen.getByText(/new counter/i)
        expect(headingTextElement).toBeInTheDocument()
    })

    test("handlers are called", async() => {
        userEvent.setup()
        const incrementHandler = jest.fn()
        const decrementHandler = jest.fn()
        render(<NewCounter count={0} increment={incrementHandler} decrement={decrementHandler} />)
        const incrementBtn = screen.getByRole("button", {name: /increment/i})
        const decrementBtn = screen.getByRole("button", {name: /decrement/i})

        await userEvent.click(incrementBtn)
        await userEvent.click(decrementBtn)

        expect(incrementHandler).toHaveBeenCalledTimes(1)
        expect(decrementHandler).toHaveBeenCalledTimes(1)

    })
})