import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
  test("counter rendered correctly", () => {
    render(<Counter />);
    const counterElement = screen.getByRole("heading", { level: 1 });
    expect(counterElement).toBeInTheDocument();

    const incrementBtn = screen.getByRole("button", { name: /increment/i });
    expect(incrementBtn).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);
    const counterElement = screen.getByRole("heading", { level: 1 });
    expect(counterElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking the increment button", async () => {
    user.setup();
    render(<Counter />);
    const incrementBtn = screen.getByRole("button", { name: /increment/i });
    await user.click(incrementBtn);

    const counterElement = screen.getByRole("heading", { level: 1 });
    expect(counterElement).toHaveTextContent("1");
  });

  test("renders a count of 2 after clicking twice the increment button", async () => {
    user.setup();
    render(<Counter />);
    const incrementBtn = screen.getByRole("button", { name: /increment/i });
    await user.click(incrementBtn);
    await user.click(incrementBtn);

    // or you can simple do this
    //await user.dblClick(incrementBtn)

    const counterElement = screen.getByRole("heading", { level: 1 });
    expect(counterElement).toHaveTextContent("2");
  });

  test("renders a count of 10 after clicking set button", async()=>{
    user.setup()
    render(<Counter />)
    const amountInputElement = screen.getByRole("spinbutton")
    await user.type(amountInputElement, "10")
    expect(amountInputElement).toHaveValue(10)

    const setBtn = screen.getByRole("button", { name: /set/i });
    await user.click(setBtn)

    const counterElement = screen.getByRole("heading", { level: 1 });
    expect(counterElement).toHaveTextContent("10");
  })

  test("elements are focused in the right order",async () => {
    user.setup()
    render(<Counter />)
    const incrementBtn = screen.getByRole("button", { name: /increment/i });
    const amountInputElement = screen.getByRole("spinbutton")
    const setButton = screen.getByRole("button", { name: /set/i });

    await user.tab()
    expect(incrementBtn).toHaveFocus()

    await user.tab()
    expect(amountInputElement).toHaveFocus()

    await user.tab()
    expect(setButton).toHaveFocus()
  })
});
