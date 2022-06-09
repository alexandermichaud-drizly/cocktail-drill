import cocktails from "../cocktails";
import inquirer from 'inquirer';

const missingIngredients = () => {
  // TODO implement shuffle
  cocktails.forEach(recipe => {
    const missingIngredientIndex = Math.floor(Math.random() * recipe.ingredients.length);
    const missingIngredient = recipe.ingredients[missingIngredientIndex];
    console.log(missingIngredient);
  });
};

export default missingIngredients;