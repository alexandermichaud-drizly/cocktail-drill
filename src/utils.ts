import { RecipeType, IngredientsWithQuantities } from "./types";

export const printRecipe = ({ name, ingredients, garnishes, preparation, servedIn, servedWithIce}: RecipeType) => {
  const output = ['', name, '', 'Ingredients:'];
  ingredients.forEach(x => output.push(`${x.quantity} ${x.units} ${x.ingredient}`));
  output.push('','Prepation:');
  preparation.forEach(x => output.push(x));
  output.push('',`Serve in a ${servedIn} with${servedWithIce ? '' : 'out'} ice`);
  if (garnishes) output.push(`Garnish with ${garnishes.map((x, i) => (i === garnishes.length - 1) ? x : `${x},`).join(' ')}`);
  output.push('');

  output.forEach(line => console.log(line));
};

export const flattenIngredients = (cocktails: RecipeType[]) => cocktails.map(cocktail => {
  const { ingredients } = cocktail;
  const ingredientsArr = ingredients.map(obj => obj['ingredient']);
  return {
    ...cocktail,
    ingredients: ingredientsArr,
  }
});