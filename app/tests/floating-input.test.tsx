// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import FloatingInput from "@/app/components/floatinginput/floatinginput";

afterEach(cleanup);

function setup(showGenerate = false, loading = false) {
  const onSearch = vi.fn();
  const onGenerate = vi.fn();

  render(
    <FloatingInput
      onSearch={onSearch}
      onGenerate={onGenerate}
      showGenerate={showGenerate}
      loading={loading}
    />,
  );

  return { onSearch, onGenerate };
}

describe("FloatingInput", () => {
  it("searches with trimmed text and clears the input", () => {
    const { onSearch } = setup();
    const input = screen.getByPlaceholderText("Enter Ingredients...");

    fireEvent.change(input, { target: { value: "  chicken  " } });
    fireEvent.click(screen.getByLabelText("Search"));

    expect(onSearch).toHaveBeenCalledWith("chicken");
    expect(input).toHaveValue("");
  });

  it("hides the generate button by default", () => {
    setup();

    expect(
      screen.queryByRole("button", { name: "Generate Recipes" }),
    ).not.toBeInTheDocument();
  });

  it("shows the generate button and calls onGenerate", () => {
    const { onGenerate } = setup(true);

    fireEvent.click(screen.getByRole("button", { name: "Generate Recipes" }));

    expect(onGenerate).toHaveBeenCalledOnce();
  });

  it("disables the buttons while loading", () => {
    setup(true, true);

    expect(screen.getByLabelText("Search")).toBeDisabled();
    expect(screen.getByRole("button", { name: "Generate Recipes" })).toBeDisabled();
  });
});
