#!/usr/bin/env node
import { VesselsType, IngredientsWithQuantities, PreparationTypes, QuantityTypes } from './constants';

type Recipe = {
  name: string;
  ingredients: Set<IngredientsWithQuantities>;
  garnish: string;
  preparation: PreparationTypes[];
  servedIn: VesselsType;
}