import { describe, expect, it } from "vitest";
import {
  GenerateBody,IngredientSchema,IngredientsBody,RecipeSchema} from "@/lib/schemas";

const ingredient = {
  idIngredient: "1",
  strIngredient: "Tomato",
  strThumb: "https://example.com/tomato.png",
  strDescription: "A red fruit.",
};

describe("ingredient validation", () => {
  it("accepts a valid ingredient", () => {
    expect(IngredientSchema.parse(ingredient)).toEqual(ingredient);
  });

  it("uses empty strings when thumbnail and description are missing", () => {
    const parsed = IngredientSchema.parse({
      idIngredient: "2",
      strIngredient: "Salt",
    });

    expect(parsed.strThumb).toBe("");
    expect(parsed.strDescription).toBe("");
  });

  it("rejects an ingredient with an empty name", () => {
    const result = IngredientSchema.safeParse({
      ...ingredient,
      strIngredient: "",
    });

    expect(result.success).toBe(false);
  });

  it("rejects an ingredient without an id", () => {
    const result = IngredientSchema.safeParse({
      ...ingredient,
      idIngredient: undefined,
    });

    expect(result.success).toBe(false);
  });

  it("rejects an empty ingredient list", () => {
    expect(IngredientsBody.safeParse([]).success).toBe(false);
  });
});

describe("recipe validation", () => {
  const recipe = {
    idMeal: "100",
    strMeal: "Tomato Soup",
    strMealThumb: "https://example.com/soup.png",
    ingredients: ["tomato"],
    strInstructions: "Cook it.",
  };

  it("accepts a valid recipe", () => {
    expect(RecipeSchema.parse(recipe)).toEqual(recipe);
  });

  it("fills in default recipe fields", () => {
    const parsed = RecipeSchema.parse({
      idMeal: "100",
      strMeal: "Tomato Soup",
      strMealThumb: "https://example.com/soup.png",
    });

    expect(parsed.ingredients).toEqual([]);
    expect(parsed.strInstructions).toBe("");
  });

  it("rejects a recipe with an empty name", () => {
    expect(RecipeSchema.safeParse({ ...recipe, strMeal: "" }).success).toBe(
      false,
    );
  });
});

describe("recipe generation input", () => {
  it("rejects an empty ingredient list", () => {
    expect(GenerateBody.safeParse({ ingredients: [] }).success).toBe(false);
  });

  it("rejects a blank ingredient", () => {
    expect(GenerateBody.safeParse({ ingredients: ["chicken", ""] }).success).toBe(
      false,
    );
  });
});
