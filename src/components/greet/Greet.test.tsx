import { render, screen } from "@testing-library/react"
import Greet from "./Greet"
 /* 
 * Greet should render Hello text and if a name is passed into the component 
 * It should render the hello followed by name
 */

 /*
 TDD is a software development process where we write test before writing software code and also making sure that all the test passes.
 */

 test("Greet renders correctly", ()=>{
    render(<Greet />)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
 })

 test("Greet renders correctly with a name", ()=>{
    render(<Greet name="Munna" />)
    const textElement = screen.getByText(/hello munna/i)
    expect(textElement).toBeInTheDocument()
 })