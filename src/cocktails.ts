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
    name: "Adonis",
    ingredients: [
      { ingredient: Spirits.SHERRY, quantity: 1.5, units: Units.OUNCE},
      { ingredient: Spirits.VERMOUTH_ITALIAN, quantity: 1.5, units: Units.OUNCE},
      { ingredient: Bitters.ORANGE, quantity: 2, units: Units.DASH},
    ],
    preparation: [
      Preparations.STIR
    ],
    servedIn: Vessels.COCKTAIL,
    servedWithIce: false,
    garnishes: [
      Garnishes.ORANGE_PEEL
    ]
  },
  {
    name: "Air Mail",
    ingredients: [
      { ingredient: Spirits.RUM_AGED, quantity: 1.5, units: Units.OUNCE},
      { ingredient: Juices.LIME, quantity: 0.75, units: Units.OUNCE},
      { ingredient: SyrupsAndSweeteners.HONEY, quantity: 0.5, units: Units.OUNCE},
      { ingredient: Spirits.SPARLKING, quantity: 1.5, units: Units.OUNCE},
    ],
    preparation: [
      Preparations.DRY_SHAKE,
      Preparations.SHAKE,
      Preparations.TOP,
    ],
    servedIn: Vessels.COCKTAIL,
    servedWithIce: false,
    garnishes: [
      Garnishes.ORANGE_PEEL
    ]
  },
  {
    name: "Alaska",
    ingredients: [
      { ingredient: Spirits.GIN_OLD_TOM, quantity: 2, units: Units.OUNCE},
      { ingredient: Spirits.CHARTREUSE_YELLOW, quantity: 1, units: Units.OUNCE},
      { ingredient: Bitters.ORANGE, quantity: 2, units: Units.DASH},
    ],
    preparation: [
      Preparations.STIR,
    ],
    servedIn: Vessels.COCKTAIL,
    servedWithIce: false,
  },
  {
    name: "Amaretto Sour",
    ingredients: [
      { ingredient: Spirits.AMARETTO, quantity: 1.5, units: Units.OUNCE},
      { ingredient: Juices.LEMON, quantity: 1, units: Units.OUNCE},
      { ingredient: SyrupsAndSweeteners.DEMERARA, quantity: 1, units: Units.TEASPOON},
    ],
    preparation: [
      Preparations.STIR,
    ],
    servedIn: Vessels.COCKTAIL,
    servedWithIce: false,
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