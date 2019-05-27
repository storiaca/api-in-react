import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";

const API_KEY = "26a279f32f501853292bf686e9ebbe96";

class App extends Component {
  state = {
    recipes: []
  };
  getRecipe = async e => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;

    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=5`
    );
    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  };
  render() {
    const { recipes } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        {recipes.map(recipe => {
          return <p key={recipe.recipe_id}>{recipe.title}</p>;
        })}
      </div>
    );
  }
}

export default App;
