import React from "react";
import { Link } from "gatsby";
import slugify from "slugify";

const RecipesList = ({ recipes }) => {
  return (
    <div className="recipes-list">
      {recipes.map((recipe) => {
        const { id, title, image, prepTime, cookTime } = recipe;
        const slug = slugify(title, { lower: true });
        return (
          <Link key={id} to={`/${slug}`} className="recipe">
            <img src={image} alt={title} className="recipe-img" />
            <h5>{title}</h5>
            <p>Prep: {prepTime}</p>
            <p>Cook: {cookTime}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default RecipesList;
