#!/usr/bin/env node
import inquirer from 'inquirer';
import { GameModes } from './constants';
// import { RecipeType } from './types';

let answer = await inquirer.prompt({
  name: "gameMode",
  type: "list",
  message: "Choose how you'd like to practice",
  choices: Object.values(GameModes),
});

console.log(`Your answer was ${answer.gameMode}`);
