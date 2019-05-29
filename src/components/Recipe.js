import React, { Component } from "react";
import { Link } from "react-router-dom";
const API_KEY = "26a279f32f501853292bf686e9ebbe96";

class Recipe extends Component {
  state = {
    activeRecipe: []
  };

  async componentDidMount() {
    const title = this.props.location.state.recipe;

    const req = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`
    );
    const res = await req.json();
    this.setState({ activeRecipe: res.recipes[0] });
    console.log(this.state.activeRecipe);
  }
  render() {
    const { activeRecipe } = this.state;
    return (
      <div className="container">
        {this.state.activeRecipe.length !== 0 && (
          <div className="active-recipe">
            <img
              src={activeRecipe.image_url}
              alt={activeRecipe.title}
              className="active-recipe__img"
            />
            <h3 className="active-recipe__title">{activeRecipe.title}</h3>
            <h4 className="active-recipe__publisher">
              Publisher: <span>{activeRecipe.publisher}</span>
            </h4>
            <p className="active-recipe__website">
              Website:{" "}
              <span>
                <a
                  href={activeRecipe.publisher_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {activeRecipe.publisher_url}
                </a>
              </span>
            </p>
            <button className="active-recipe__button">
              <Link to="/"> Go Home</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
