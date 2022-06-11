import cocktails from "../cocktails";
import { numberToDrill } from "../utils";
import arrayShuffle from 'array-shuffle';

const missingIngredients = async () => {
  const shuffled = arrayShuffle(cocktails);

  const n = await numberToDrill(shuffled);

  shuffled.forEach(recipe => {
    const missingIngredientIndex = Math.floor(Math.random() * recipe.ingredients.length);
    const missingIngredient = recipe.ingredients[missingIngredientIndex];
    console.log(missingIngredient);
  });
};

export default missingIngredients;