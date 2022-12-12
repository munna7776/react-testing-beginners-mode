import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event"
import Select from "./Select";

describe("Select", ()=>{
    test("selectOptions", async()=>{
        user.setup()
        render(<Select />)
        const selectElement = screen.getByRole("listbox")
        await user.selectOptions(selectElement, ["1", "C"])
        const firstOptionElement = screen.getByRole("option", {name: "A"}) as HTMLOptionElement
        const secondOptionElement = screen.getByRole("option", {name: "B"}) as HTMLOptionElement
        const thirdOptionElement = screen.getByRole("option", {name: "C"}) as HTMLOptionElement
        expect(firstOptionElement.selected).toBe(true)
        expect(secondOptionElement.selected).toBe(false)
        expect(thirdOptionElement.selected).toBe(true)
    })
})