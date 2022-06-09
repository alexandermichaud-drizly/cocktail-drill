import { RecipeType } from "./types";
import { 
  Vessels, 
  Spirits, 
  Bitters, 
  Juices, 
  SyrupsAndSweeteners, 
  MiscellaneousIngredients, 
  Preparations,
  Units,
  Garnishes
} from "./constants";

const cocktails: RecipeType[] = [
  {
    name: "Acacia",
    ingredients: [
      { ingredient: Spirits.GIN_LONDON, quantity: 2, units: Units.OUNCE},
      { ingredient: Spirits.BENEDICTINE, quantity: 0.75, units: Units.OUNCE},
      { ingredient: Spirits.KIRSCH, quantity: 0.25, units: Units.OUNCE},
    ],
    preparation: [
      Preparations.STIR
    ],
    servedIn: Vessels.COCKTAIL,
    servedWithIce: false,
    garnishes: [
      Garnishes.LEMON_EXPRESSED,
      Garnishes.LEMON_PEEL
    ]
  },
  {
    name: "Brandy and Benedictine",
    ingredients: [
      { ingredient: Spirits.BRANDY, quantity: 1.5, units: Units.OUNCE},
      { ingredient: Spirits.BENEDICTINE, quantity: 0.75, units: Units.OUNCE},
    ],
    preparation: [
      Preparations.STIR
    ],
    servedIn: Vessels.ROCKS,
    servedWithIce: true,
    garnishes: [
      Garnishes.LEMON_EXPRESSED,
    ]
  },
  {
    name: "Corpse Reviver No. 1",
    ingredients: [
      { ingredient: Spirits.BRANDY, quantity: 2, units: Units.OUNCE},
      { ingredient: Spirits.BRANDY_APPLE, quantity: 1, units: Units.OUNCE},
      { ingredient: Spirits.VERMOUTH_ITALIAN, quantity: 1, units: Units.OUNCE},
    ],
    preparation: [
      Preparations.SHAKE
    ],
    servedIn: Vessels.COCKTAIL,
    servedWithIce: false,
  },
]

export default cocktails;