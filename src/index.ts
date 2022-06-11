#!/usr/bin/env node
import inquirer from 'inquirer';
import { Modes } from './constants';
import drillRecipes from './modes/drill_recipes';
import missingIngredients from './modes/missing_ingredients';
import searchRecipes from './modes/search_recipes';

const userChoice = await inquirer.prompt({
  name: "mode",
  type: "list",
  message: "Choose how you'd like to practice",
  choices: Object.values(Modes),
});

const { mode } = userChoice;

switch(mode) {
  case Modes.RECIPE_MODE: {
    drillRecipes();
    break;
  }
  case Modes.MISSING_INGREDIENT_MODE: {
    missingIngredients();
    break;
  }
  case Modes.SEARCH_MODE: {
    await searchRecipes();
    break;
  }
}

console.log('Happy mixing!');
process.exit();
