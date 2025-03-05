import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IRecipe } from "@/@types/recipes";

export const RecipeCard: React.FC<IRecipe> = ({ id, title, image }) => {
  return (
    <Link href={`/recipes/${id}`} className="group">
      <div className="rounded-lg border border-gray-200 bg-white shadow-lg transition-transform duration-200 hover:scale-105">
        <div className="relative h-52 w-full">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
            loading="lazy"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};
