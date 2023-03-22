import { Link } from "gatsby";
import React from "react";
import { RECIPES } from "../components/AllRecipes";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import setupTags from "../utils/setupTags";

const Tags = () => {
  const newTags = setupTags(RECIPES);

  return (
    <Layout>
      <SEO title="Tags" />
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag;
            return (
              <Link to={`/${text}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default Tags;
