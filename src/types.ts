import { Vessels, Spirits, Bitters, Juices, SyrupsAndSweeteners, MiscellaneousIngredients, Preparations, Units} from './constants';

type VesselsType = `${Vessels}`;
type IngredientTypes = `${Spirits}` | `${Bitters}` |`${Juices}` | `${SyrupsAndSweeteners}` | `${MiscellaneousIngredients}`;
type PreparationTypes = `${Preparations}`;
type QuantityTypes = `${Units}`;
type IngredientsWithQuantities = { ingredient: IngredientTypes, units: QuantityTypes, quantity: number };

export type RecipeType = {
  name: string;
  ingredients: IngredientsWithQuantities[];
  garnish?: string;
  preparation: PreparationTypes[];
  servedIn: VesselsType;
  servedWithIce: false;
}
