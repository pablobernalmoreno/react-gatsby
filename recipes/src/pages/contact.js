import React from "react";
import { RECIPES } from "../components/AllRecipes";
import Layout from "../components/Layout";
import RecipesList from "../components/RecipesList";
import SEO from "../components/SEO";

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch?</h3>
            <p>
              Schlitz messenger bag lumbersexual bitters tattooed. Chia pickled
              photo booth everyday carry aesthetic, kogi readymade four loko
              semiotics kinfolk seitan air plant thundercats pop-up trust fund.
            </p>
            <p>
              Art party polaroid thundercats scenester before they sold out put
              a bird on it artisan flexitarian migas letterpress butcher PBR&B
              meditation mumblecore. Waistcoat tbh paleo fam mustache. Listicle
              seitan iPhone mumblecore forage, polaroid ramps cliche tumeric.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" />
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesauce!</h5>
          <RecipesList recipes={RECIPES} />
        </section>
      </main>
    </Layout>
  );
};

export default contact;
