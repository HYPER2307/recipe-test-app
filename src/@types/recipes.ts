export interface IRecipesResponse {
  offset: number;
  number: number;
  results: IRecipe[];
  totalResults: number;
}

export interface IRecipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
  summary: string;
  readyInMinutes: number; // Час приготування
  servings: number; // Кількість порцій
  sourceUrl: string; // Посилання на оригінальний рецепт
  extendedIngredients: IIngredient[]; // Масив інгредієнтів
  analyzedInstructions: IInstruction[]; // Масив інструкцій
}

export interface IIngredient {
  id: number;
  name: string;
  amount: number;
  unit: string;
  original: string; // Оригінальний запис інгредієнта
}

export interface IInstruction {
  name: string; // Назва секції (іноді порожня)
  steps: IStep[]; // Масив кроків
}

export interface IStep {
  number: number; // Номер кроку
  step: string; // Текст кроку
  ingredients?: IIngredientShort[]; // Використані інгредієнти (скорочено)
  equipment?: IEquipment[]; // Використане обладнання
}

export interface IIngredientShort {
  id: number;
  name: string;
  image: string;
}

export interface IEquipment {
  id: number;
  name: string;
  image: string;
}
