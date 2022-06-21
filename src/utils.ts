import { RecipeType } from "./types";
import inquirer from 'inquirer';
import { Preparations } from "./constants";

export const printRecipe = ({ name, ingredients, garnishes, preparation, servedIn, servedWithIce}: RecipeType) => {
  const output = ['', name, '', 'Ingredients:'];
  ingredients.forEach(x => output.push(`${x.quantity} ${x.units} ${x.ingredient}`));
  output.push('','Prepation:');
  preparation.forEach(x => {if (x !== Preparations.CRUSHED_ICE) output.push(x)});
  output.push('',`Serve in a ${servedIn} with${servedWithIce ? '' : 'out'} ${servedWithIce && preparation.includes(Preparations.CRUSHED_ICE) ? 'crushed' : ''} ice`);
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

export const numberToDrill = async (cocktails: RecipeType[]) => {
  const inquiry = await inquirer.prompt({
    name: "cocktailsToDrill",
    type: "input",
    message: "Enter the number of recipes you'd like to drill. Hit enter if you'd like to drill the full set."
  });

  const maxRecipes = cocktails.length;
  const { cocktailsToDrill } = inquiry;
  if (isNaN(cocktailsToDrill)) {
    console.log('Input is not a number, defaulting to full recipe list.');
    return maxRecipes;
  }
  if (!cocktailsToDrill || cocktailsToDrill > maxRecipes) {
    console.log('Drilling full recipe list.'); 
    return maxRecipes;
  }
  console.log(`Drilling ${cocktailsToDrill} recipes.`); 
  return cocktailsToDrill;
};
