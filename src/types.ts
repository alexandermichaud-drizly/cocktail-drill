import { Vessels, Spirits, Bitters, Juices, SyrupsAndSweeteners, MiscellaneousIngredients, Preparations, Units, Garnishes} from './constants';

type VesselsType = `${Vessels}`;
type IngredientTypes = `${Spirits}` | `${Bitters}` |`${Juices}` | `${SyrupsAndSweeteners}` | `${MiscellaneousIngredients}`;
type PreparationTypes = `${Preparations}`;
type QuantityTypes = `${Units}`;
type IngredientsWithQuantities = { ingredient: IngredientTypes, units: QuantityTypes, quantity: number, optional?: boolean };

export type RecipeType = {
  name: string;
  ingredients: IngredientsWithQuantities[];
  garnishes?: Garnishes[];
  preparation: PreparationTypes[];
  servedIn: VesselsType;
  servedWithIce: boolean;
}
