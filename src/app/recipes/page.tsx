import React, { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Loader } from "@/components/Loader";
import { IRecipesResponse } from "@/@types/recipes";
import { Sizes } from "@/@types/sizes";
import { RecipeCard } from "./RecipeCard";

interface GetRecipesAsyncParams {
  query: string;
  cuisine: string;
  maxReadyTime: string;
}

const getRecipesAsync = async ({
  cuisine,
  maxReadyTime,
  query,
}: GetRecipesAsyncParams) => {
  const apiKey = process.env.API_KEY;
  const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&cuisine=${cuisine}&maxReadyTime=${maxReadyTime}&apiKey=${apiKey}`;

  try {
    const response = await fetch(url, { next: { revalidate: 60 } });
    if (!response.ok) throw new Error(`Failed to fetch: ${response.status}`);

    const data: IRecipesResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Fetching error:", error);
    return null;
  }
};

export default async function Recipes({
  searchParams,
}: {
  searchParams: { query?: string; cuisine?: string; maxReadyTime?: string };
}) {
  const { cuisine = "", maxReadyTime = "", query = "" } = await searchParams;

  const results = await getRecipesAsync({ cuisine, query, maxReadyTime });

  return (
    <Suspense
      fallback={
        <div className="flex h-full items-center justify-center">
          <Loader size={Sizes.XXL} />
        </div>
      }
    >
      <div className="p-6 md:p-10">
        <Button className="mb-6">
          <Link href="/" className="text-lg text-white">
            {"<-- Back to home"}
          </Link>
        </Button>

        {results?.results.length ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {results.results.map((item) => (
              <RecipeCard key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-gray-500">No recipes found.</p>
        )}
      </div>
    </Suspense>
  );
}
