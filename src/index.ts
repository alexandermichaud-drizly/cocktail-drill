#!/usr/bin/env node
import inquirer from 'inquirer';
import { GameModes } from './constants';
import drillRecipes from './games/drill_recipes';
import missingIngredients from './games/missing_ingredients';

const userChoice = await inquirer.prompt({
  name: "gameMode",
  type: "list",
  message: "Choose how you'd like to practice",
  choices: Object.values(GameModes),
});

const { gameMode } = userChoice;

switch(gameMode) {
  case GameModes.RECIPE_MODE: {
    drillRecipes();
    break;
  }
  case GameModes.MISSING_INGREDIENT_MODE: {
    missingIngredients();
    break;
  }
}

console.log('Happy mixing!');
process.exit();