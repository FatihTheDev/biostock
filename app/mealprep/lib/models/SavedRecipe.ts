import mongoose, { Schema, Model } from "mongoose";

interface SavedRecipe {
  userId: string;
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  ingredients: string[];
  strInstructions: string;
}

const savedRecipeSchema = new Schema<SavedRecipe>({
  userId: { type: String, required: true },
  idMeal: { type: String, required: true },
  strMeal: { type: String, required: true },
  strMealThumb: { type: String, required: true },
  ingredients: { type: [String], default: [] },
  strInstructions: { type: String, default: "" },
}, { timestamps: false });

savedRecipeSchema.index({ userId: 1, idMeal: 1 }, { unique: true });

declare global {
  var SavedRecipeModel: Model<SavedRecipe> | undefined;
}

const SavedRecipe = global.SavedRecipeModel ?? (global.SavedRecipeModel = mongoose.model<SavedRecipe>("SavedRecipe", savedRecipeSchema));

export default SavedRecipe;
