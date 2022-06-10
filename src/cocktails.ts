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
    name: "Americano",
    ingredients: [
      { ingredient: Spirits.CAMPARI, quantity: 1, units: Units.OUNCE},
      { ingredient: Spirits.VERMOUTH_ITALIAN, quantity: 1, units: Units.OUNCE},
      { ingredient: MiscellaneousIngredients.SELTZER, quantity: 2, units: Units.OUNCE},
    ],
    preparation: [
      Preparations.STIR,
    ],
    servedIn: Vessels.ROCKS,
    servedWithIce: true,
    garnishes: [
      Garnishes.LEMON_PEEL
    ]
  },
  {
    name: "Applejack Rabbit",
    ingredients: [
      { ingredient: Spirits.BRANDY_APPLE_HIGH_PROOF, quantity: 1.75, units: Units.OUNCE},
      { ingredient: SyrupsAndSweeteners.MAPLE, quantity: 0.5, units: Units.OUNCE},
      { ingredient: Juices.LEMON, quantity: 0.5, units: Units.OUNCE},
      { ingredient: Juices.ORANGE, quantity: 0.25, units: Units.OUNCE},
    ],
    preparation: [
      Preparations.SHAKE,
    ],
    servedIn: Vessels.COCKTAIL,
    servedWithIce: false,
  },
  {
    name: "Army and Navy",
    ingredients: [
      { ingredient: Spirits.GIN_LONDON, quantity: 1.75, units: Units.OUNCE},
      { ingredient: SyrupsAndSweeteners.ORGEAT, quantity: 0.75, units: Units.OUNCE},
      { ingredient: Juices.LEMON, quantity: 0.5, units: Units.OUNCE},
      { ingredient: Bitters.ANGOSTURA, quantity: 2, units: Units.DASH},
    ],
    preparation: [
      Preparations.SHAKE,
    ],
    servedIn: Vessels.COCKTAIL,
    servedWithIce: false,
  },
  {
    name: "Aviation",
    ingredients: [
      { ingredient: Spirits.GIN_LONDON, quantity: 2, units: Units.OUNCE},
      { ingredient: Juices.LEMON, quantity: 0.75, units: Units.OUNCE},
      { ingredient: Spirits.MARASCHINO, quantity: 0.5, units: Units.OUNCE},
      { ingredient: Spirits.VIOLETTE, quantity: 0.25, units: Units.OUNCE},
    ],
    preparation: [
      Preparations.SHAKE,
      Preparations.STRAIN
    ],
    servedIn: Vessels.COCKTAIL,
    servedWithIce: false,
    garnishes: [
      Garnishes.CHERRY
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
    name: "Bamboo",
    ingredients: [
      { ingredient: Spirits.SHERRY, quantity: 1.5, units: Units.OUNCE},
      { ingredient: Spirits.VERMOUTH_FRENCH, quantity: 1.5, units: Units.OUNCE},
      { ingredient: SyrupsAndSweeteners.DEMERARA, quantity: 1, units: Units.TEASPOON},
      { ingredient: Bitters.ANGOSTURA, quantity: 1, units: Units.DASH},
      { ingredient: Bitters.ORANGE, quantity: 1, units: Units.DASH},
    ],
    preparation: [
      Preparations.STIR
    ],
    servedIn: Vessels.COCKTAIL,
    servedWithIce: false,
    garnishes: [
      Garnishes.LEMON_EXPRESSED,
    ]
  },
  {
    name: "Beachcomber",
    ingredients: [
      { ingredient: Spirits.RUM_UNAGED, quantity: 1.5, units: Units.OUNCE},
      { ingredient: Spirits.ORANGE, quantity: 0.5, units: Units.OUNCE},
      { ingredient: Juices.LIME, quantity: 0.5, units: Units.OUNCE},
      { ingredient: Spirits.MARASCHINO, quantity: 1, units: Units.TEASPOON},
      { ingredient: SyrupsAndSweeteners.SIMPLE, quantity: 0.25, units: Units.OUNCE, optional: true },
    ],
    preparation: [
      Preparations.SHAKE
    ],
    servedIn: Vessels.COCKTAIL,
    servedWithIce: false,
    garnishes: [
      Garnishes.RIM_SUGAR
    ]
  },
  {
    name: "Bee's Knees",
    ingredients: [
      { ingredient: Spirits.GIN_LONDON, quantity: 2, units: Units.OUNCE},
      { ingredient: Juices.LEMON, quantity: 1, units: Units.OUNCE},
      { ingredient: SyrupsAndSweeteners.HONEY, quantity: 0.75, units: Units.OUNCE},
    ],
    preparation: [
      Preparations.DRY_SHAKE,
      Preparations.SHAKE
    ],
    servedIn: Vessels.COCKTAIL,
    servedWithIce: false,
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