import React, { Component } from 'react';
import './RecipeApp.css';
import RecipeList from "./components/RecipeList/recipeList";
import NavBar from "./components/navbar/navbar";
import RecipeInput from "./components/RecipeInput/recipeInput";

class RecipeApp extends Component {
  constructor(props){
    super(props);
    this.state={
      recipes: [
        {
          id:0,
          title: "Spaghetti",
          instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
          ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
          img: "spaghetti.jpg"
        },
        {
          id:1,
          title: "Milkshake",
          instructions: "Combine ice cream and milk.  Blend until creamy",
          ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
          img: "milkshake.jpg"
        },
        {
          id:2,
          title: "Avocado Toast",
          instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
          ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
          img: "avocado_toast.jpg"
        }
      ],
      nextRecipeId:3,
      showForm:false
    }
    this.handleSave=this.handleSave.bind(this);
    this.onDelete=this.onDelete.bind(this);
  }
  handleSave(recipe){
    this.setState((prevState,props)=>{
      const newRecipe={...recipe,id:this.state.nextRecipeId};
      return{
        nextRecipeId:prevState.nextRecipeId+1,
        recipes:[...this.state.recipes,newRecipe],
        showForm:false
      }
     

    })
  }
  onDelete(id){
    const recipes=this.state.recipes.filter(r=>r.id!==id);
  this.setState({recipes})
  }
  render() {
    const {showForm}=this.state;
    return (
      <div className="App">
      <NavBar onNewRecipe={()=>this.setState({showForm:true})}/>
      {showForm ? <RecipeInput
        onClose={()=>{this.setState({showForm:false})}}
        onSave={this.handleSave}/>:null}
      
        <RecipeList onDelete={this.onDelete}
         recipes={this.state.recipes} />
        </div>
    );
  }
}

export default RecipeApp;
