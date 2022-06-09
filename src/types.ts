import { Vessels, Spirits, Bitters, Juices, SyrupsAndSweeteners, MiscellaneousIngredients, Preparations, Quantities} from './constants';

type VesselsType = `${Vessels}`;
type IngredientTypes = `${Spirits}` | `${Bitters}` |`${Juices}` | `${SyrupsAndSweeteners}` | `${MiscellaneousIngredients}`;
type PreparationTypes = `${Preparations}`;
type QuantityTypes = `${Quantities}`;
type IngredientsWithQuantities = { ingredient: IngredientTypes, quantity: QuantityTypes, multiplier: number };

export type RecipeType = {
  name: string;
  ingredients: IngredientsWithQuantities[];
  garnish: string;
  preparation: PreparationTypes[];
  servedIn: VesselsType;
}
