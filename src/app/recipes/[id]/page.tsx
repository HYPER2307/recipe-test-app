import React, { Suspense } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Loader } from "@/components/Loader";
import { IRecipe } from "@/@types/recipes";
import { Sizes } from "@/@types/sizes";

interface RecipePageProps {
  params: { id: string };
}

export default async function RecipePage({ params }: RecipePageProps) {
  const apiKey = process.env.API_KEY;
  const url = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${apiKey}`;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return notFound();

  const recipe: IRecipe = await res.json();

  return (
    <Suspense
      fallback={
        <div className="flex h-full items-center justify-center">
          <Loader size={Sizes.XXL} />
        </div>
      }
    >
      <div className="container mx-auto max-w-3xl p-6">
        <div className="overflow-hidden rounded-xl bg-white shadow-lg">
          <Image
            className="h-64 w-full object-cover"
            src={recipe.image}
            alt={recipe.title}
            width={600}
            height={400}
            priority
          />

          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800">{recipe.title}</h1>

            <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-600">
              <span className="rounded-md bg-gray-100 px-3 py-1">
                ⏱ {recipe.readyInMinutes} min
              </span>
              <span className="rounded-md bg-gray-100 px-3 py-1">
                🍽 {recipe.servings}
              </span>
            </div>

            <p className="mt-4 leading-relaxed text-gray-700">
              {recipe.summary.replace(/<[^>]+>/g, "")}
            </p>

            <h2 className="mt-6 text-xl font-semibold text-gray-800">
              Ingredients:
            </h2>
            <ul className="mt-3 text-gray-700">
              {recipe.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>

            <h2 className="mt-6 text-xl font-semibold text-gray-800">
              Instruction:
            </h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-gray-700">
              {recipe.analyzedInstructions[0]?.steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
