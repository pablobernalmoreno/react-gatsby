import React from "react";
import RecipesList from "./RecipesList";
import TagsList from "./TagsList";

//I dont use contentful because it wouldnt work for me :c
export const RECIPES = [
  {
    id: 1,
    title: "Carne Asada",
    image: "https://assets.unileversolutions.com/recipes-v2/109068.jpg",
    prepTime: "1 hour",
    cookTime: "30 minutes",
    tags: ["lunch", "beef"],
  },
  {
    id: 2,
    title: "Apple Pie",
    image:
      "https://www.simplyrecipes.com/thmb/SeOrwAcn5dAuazvh-AhlrDbAd24=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Apple-Pie-LEAD-04-11db861782aa4ebdb5ef9948125ef0ef.jpg",
    prepTime: "1 hour",
    cookTime: "1 hour",
    tags: ["sweets", "dessert"],
  },
  {
    id: 3,
    title: "Banana Pancake",
    image:
      "https://static.onecms.io/wp-content/uploads/sites/43/2022/03/20/20334-Banana-Pancakes-mfs__2x3.jpg",
    prepTime: "20 minutes",
    cookTime: "15 minutes",
    tags: ["breakfast", "sweets"],
  },
];

const AllRecipes = () => {
  return (
    <section className="recipes-container">
      <TagsList recipes={RECIPES} />
      <RecipesList recipes={RECIPES} />
    </section>
  );
};

export default AllRecipes;
