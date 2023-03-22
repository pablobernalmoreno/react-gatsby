import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import RecipesList from "../components/RecipesList";
import { RECIPES } from "../components/AllRecipes";
import SEO from "../components/SEO";

const About = () => {
  return (
    <Layout>
      <SEO title="About" description="this is about page" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Blackbird spyplane 3 wolf moon</h2>
            <p>
              Vegan listicle authentic, fingerstache consectetur pariatur irony
              ea tonx consequat pour-over taiyaki. Tempor fingerstache grailed
              edison bulb, gastropub franzen vexillologist everyday carry
              post-ironic.
            </p>
            <p>
              Ramps shabby chic plaid pickled vape, DIY paleo id non etsy
              cronut. Pinterest laboris pop-up, lumbersexual voluptate
              letterpress JOMO pug skateboard af godard synth yr freegan.
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            className="about-img"
            src="../assets/images/about.jpeg"
            alt="Alt image"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesauce!</h5>
          <RecipesList recipes={RECIPES} />
        </section>
      </main>
    </Layout>
  );
};

export default About;
