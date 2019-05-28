import React, { Component } from "react";
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
        <div className="active-recipe">
          <img
            src={activeRecipe.image_url}
            alt=""
            className="active-recipe__img"
          />
          <h3>{activeRecipe.title}</h3>
        </div>
      </div>
    );
  }
}

export default Recipe;
