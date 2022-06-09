import * as JsSearch from "js-search";
import cocktails from "../cocktails";
import inquirer from 'inquirer';
import { RecipeType } from "../types";
import { printRecipe } from "../utils";

const searchRecipes = async () => {
  const search = new JsSearch.Search('name');
  [
    ['ingredients','ingredient'],
    'garnishes',
    'servedIn'
  ].forEach(index => search.addIndex(index));

  search.addDocuments(cocktails);
  let searchInput = '';
  while (searchInput !== 'exit') {
    const searchInquiry = await inquirer.prompt({
      name: "search",
      type: "input",
      message: "Search recipes by name, ingredients, garnishes, or glass type. Type 'exit' to close.",
    }) 
    
    searchInput = searchInquiry.search;
    if (searchInput.toLowerCase() === 'exit') continue;

    const results = search.search(searchInput);
    if (results.length === 0) {
      console.log('Your input yielded no matches, try again.');
      continue;
    }

    const selectionInquiry = await inquirer.prompt({
      name: "selection",
      type: "list",
      message: "The following cocktails match your search",
      choices: results.map((cocktail: RecipeType) => cocktail.name)
    })

    const { selection } = selectionInquiry;
    const chosenRecipe = cocktails.find(cocktail => cocktail.name === selection);

    printRecipe(chosenRecipe);
  }
};

export default searchRecipes;