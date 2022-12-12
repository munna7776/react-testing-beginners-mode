import { findByRole, render, screen } from "@testing-library/react"
import Skills from "./Skills"

describe("Skills", ()=>{
    const skills = ["html", "css", "javascript"]
    test("renders skills correctly", ()=>{
        render(<Skills skills={skills} />)

        const listElement = screen.getByRole("list")
        expect(listElement).toBeInTheDocument()
    })

    test("render a list of skills", ()=>{
        render(<Skills skills={skills} />)
        const listItemElements = screen.getAllByRole("listitem")
        expect(listItemElements).toHaveLength(skills.length)
    })

    test("render login button", ()=>{
        render(<Skills skills={skills} />)
        const loginBtn = screen.getByRole("button", {name: "Login"})
        expect(loginBtn).toBeInTheDocument()
    })

    test("start button learning is not rendered", ()=>{
        render(<Skills skills={skills} />)
        const startLearningBtn = screen.queryByRole("button", {name: "Start learning"})
        expect(startLearningBtn).not.toBeInTheDocument()
    })

    test("start learning button is eventually displayed", async()=>{
        render(<Skills skills={skills} />)
        const startLearningButton = await screen.findByRole('button', { name: /start learning/i })
        expect(startLearningButton).toBeInTheDocument()
    })
})