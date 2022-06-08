#!/usr/bin/env node
import inquirer from 'inquirer';
import { VesselsType, IngredientsWithQuantities, PreparationTypes, QuantityTypes } from './constants';

type Recipe = {
  name: string;
  ingredients: Set<IngredientsWithQuantities>;
  garnish: string;
  preparation: PreparationTypes[];
  servedIn: VesselsType;
}

const firstQuestion = async () => {
  const answer = await inquirer.prompt({
    name: "test_prompt",
    type: "list",
    message: "Choose from the list",
    choices: [
      "Option 1",
      "Option 2",
      "Option 3",
    ]
  });

  console.log(`Your answer was ${answer.test_prompt}`);
}

firstQuestion();
