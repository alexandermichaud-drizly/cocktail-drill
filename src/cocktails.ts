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
    name: "Bellini",
    ingredients: [
      { ingredient: Juices.PEACH_PUREE, quantity: 1.5, units: Units.OUNCE},
      { ingredient: Spirits.SPARLKING, quantity: 4.5, units: Units.OUNCE},
    ],
    preparation: [
      Preparations.COMBINE,
      Preparations.STIR
    ],
    servedIn: Vessels.FLUTE,
    servedWithIce: false,
    garnishes: [
      Garnishes.LEMON_TWIST
    ]
  },
  {
    name: "Bijou",
    ingredients: [
      { ingredient: Spirits.GIN_LONDON, quantity: 1, units: Units.OUNCE},
      { ingredient: Spirits.VERMOUTH_ITALIAN, quantity: 1, units: Units.OUNCE},
      { ingredient: Spirits.CHARTREUSE_GREEN, quantity: 0.75, units: Units.OUNCE},
      { ingredient: Bitters.ORANGE, quantity: 1, units: Units.DASH},
    ],
    preparation: [
      Preparations.STIR
    ],
    servedIn: Vessels.COCKTAIL,
    servedWithIce: false,
    garnishes: [
      Garnishes.CHERRY
    ]
  },
  {
    name: "Bitter Giuseppe",
    ingredients: [
      { ingredient: Spirits.VERMOUTH_ITALIAN, quantity: 1, units: Units.OUNCE},
      { ingredient: Spirits.CYNAR, quantity: 1, units: Units.OUNCE},
      { ingredient: Bitters.ORANGE, quantity: 2, units: Units.DASH},
    ],
    preparation: [
      Preparations.COMBINE,
      Preparations.STIR
    ],
    servedIn: Vessels.ROCKS,
    servedWithIce: true,
    garnishes: [
      Garnishes.LEMON_WEDGE
    ]
  },
  {
    name: "Black Russian",
    ingredients: [
      { ingredient: Spirits.VODKA, quantity: 1.5, units: Units.OUNCE},
      { ingredient: Spirits.COFFEE_LIQUEUR, quantity: 0.75, units: Units.OUNCE},
    ],
    preparation: [
      Preparations.COMBINE,
      Preparations.STIR
    ],
    servedIn: Vessels.ROCKS,
    servedWithIce: true,
  },
  {
    name: "Blinker",
    ingredients: [
      { ingredient: Spirits.RYE, quantity: 2, units: Units.OUNCE},
      { ingredient: Juices.GRAPEFRUIT, quantity: 1, units: Units.OUNCE},
      { ingredient: SyrupsAndSweeteners.GRENADINE, quantity: 0.5, units: Units.OUNCE},
    ],
    preparation: [
      Preparations.SHAKE
    ],
    servedIn: Vessels.COCKTAIL,
    servedWithIce: false,
  },
  {
    name: "Blood and Sand",
    ingredients: [
      { ingredient: Spirits.SCOTCH_BLENDED, quantity: 1.25, units: Units.OUNCE},
      { ingredient: Spirits.VERMOUTH_ITALIAN, quantity: 0.75, units: Units.OUNCE},
      { ingredient: Spirits.HEERING, quantity: 0.75, units: Units.OUNCE},
      { ingredient: Juices.ORANGE, quantity: 0.75, units: Units.OUNCE},
    ],
    preparation: [
      Preparations.SHAKE,
      Preparations.STRAIN
    ],
    servedIn: Vessels.COCKTAIL,
    servedWithIce: false,
    garnishes: [
      Garnishes.ORANGE_EXPRESSED
    ]
  },
  {
    name: "Bloody Mary",
    ingredients: [
      { ingredient: Spirits.VODKA, quantity: 2, units: Units.OUNCE},
      { ingredient: Juices.TOMATO, quantity: 4, units: Units.OUNCE},
      { ingredient: Juices.LEMON, quantity: 0.5, units: Units.OUNCE},
      { ingredient: MiscellaneousIngredients.WORCESTERSHIRE, quantity: 3, units: Units.DASH},
      { ingredient: MiscellaneousIngredients.CELERY_SALT, quantity: 1, units: Units.PINCH},
      { ingredient: MiscellaneousIngredients.PEPPER, quantity: 1, units: Units.PINCH},
      { ingredient: SyrupsAndSweeteners.DEMERARA, quantity: 1, units: Units.TEASPOON, optional: true}, 
    ],
    preparation: [
      Preparations.ROLL
    ],
    servedIn: Vessels.HIGHBALL,
    servedWithIce: false,
    garnishes: [
      Garnishes.RIM_SALT
    ]
  },
  {
    name: "Boulevardier",
    ingredients: [
      { ingredient: Spirits.BOURBON, quantity: 2, units: Units.OUNCE},
      { ingredient: Spirits.VERMOUTH_ITALIAN, quantity: 1, units: Units.OUNCE},
      { ingredient: Spirits.CAMPARI, quantity: 1, units: Units.OUNCE},
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
    name: "Bramble",
    ingredients: [
      { ingredient: Spirits.GIN_LONDON, quantity: 2, units: Units.OUNCE},
      { ingredient: Juices.LEMON, quantity: 0.75, units: Units.OUNCE},
      { ingredient: SyrupsAndSweeteners.SIMPLE, quantity: 0.5, units: Units.OUNCE},
      { ingredient: Spirits.MURE, quantity: 0.5, units: Units.OUNCE},
    ],
    preparation: [
      Preparations.SHAKE,
      Preparations.CRUSHED_ICE,
      Preparations.DRIZZLE
    ],
    servedIn: Vessels.ROCKS,
    servedWithIce: true,
    garnishes: [
      Garnishes.LEMON_SLICE,
      Garnishes.BLACKBERRY
    ]
  },
  {
    name: "Brandy Alexander",
    ingredients: [
      { ingredient: Spirits.BRANDY, quantity: 1, units: Units.OUNCE},
      { ingredient: Spirits.CACAO, quantity: 1, units: Units.OUNCE},
      { ingredient: MiscellaneousIngredients.CREAM_LIGHT, quantity: 1.5, units: Units.OUNCE},
    ],
    preparation: [
      Preparations.SHAKE,
    ],
    servedIn: Vessels.COCKTAIL,
    servedWithIce: false,
    garnishes: [
      Garnishes.NUTMEG
    ]
  },
  {
    name: "Brandy Flip",
    ingredients: [
      { ingredient: Spirits.BRANDY, quantity: 1.5, units: Units.OUNCE},
      { ingredient: SyrupsAndSweeteners.DEMERARA, quantity: 0.5, units: Units.OUNCE},
      { ingredient: MiscellaneousIngredients.EGG, quantity: 1, units: Units.OTHER},
    ],
    preparation: [
      Preparations.DRY_SHAKE,
      Preparations.SHAKE,
    ],
    servedIn: Vessels.COCKTAIL,
    servedWithIce: false,
    garnishes: [
      Garnishes.NUTMEG
    ]
  },
  {
    name: "Bronx",
    ingredients: [
      { ingredient: Spirits.GIN_LONDON, quantity: 1.5, units: Units.OUNCE},
      { ingredient: Spirits.VERMOUTH_ITALIAN, quantity: 0.5, units: Units.OUNCE},
      { ingredient: Spirits.VERMOUTH_FRENCH, quantity: 0.5, units: Units.OUNCE},
      { ingredient: Juices.ORANGE, quantity: 0.75, units: Units.OUNCE},
    ],
    preparation: [
      Preparations.SHAKE
    ],
    servedIn: Vessels.COCKTAIL,
    servedWithIce: false,
  },
  {
    name: "Caipirinha",
    ingredients: [
      { ingredient: Spirits.CACHACA, quantity: 2, units: Units.OUNCE},
      { ingredient: MiscellaneousIngredients.LIME_QUARTERED, quantity: 1, units: Units.FRUIT_WHOLE},
      { ingredient: SyrupsAndSweeteners.SUGAR, quantity: 2, units: Units.TEASPOON},
    ],
    preparation: [
      Preparations.MUDDLE,
      Preparations.COMBINE,
      Preparations.STIR
    ],
    servedIn: Vessels.ROCKS,
    servedWithIce: true,
  }, 
  {
    name: "Cape Codder",
    ingredients: [
      { ingredient: Spirits.VODKA, quantity: 1.5, units: Units.OUNCE},
      { ingredient: Juices.CRANBERRY, quantity: 4, units: Units.OUNCE},
    ],
    preparation: [
      Preparations.COMBINE,
      Preparations.STIR
    ],
    servedIn: Vessels.HIGHBALL,
    servedWithIce: true,
    garnishes: [
      Garnishes.LIME_WEDGE,
    ]
  }, 
  {
    name: "Champagne Cocktail",
    ingredients: [
      { ingredient: Spirits.SPARLKING, quantity: 5, units: Units.OUNCE},
      { ingredient: SyrupsAndSweeteners.SUGAR_CUBE, quantity: 1, units: Units.OTHER},
      { ingredient: Bitters.ANGOSTURA, quantity: 2, units: Units.DASH}, 
    ],
    preparation: [
      Preparations.COMBINE,
      Preparations.STIR
    ],
    servedIn: Vessels.FLUTE,
    servedWithIce: false,
    garnishes: [
      Garnishes.LEMON_EXPRESSED,
      Garnishes.RIM_LEMON,
      Garnishes.LEMON_TWIST
    ]
  }, 
  {
    name: "Chartreuse Swizzle",
    ingredients: [
      { ingredient: Spirits.CHARTREUSE_GREEN, quantity: 1.5, units: Units.OUNCE},
      { ingredient: Juices.PINEAPPLE, quantity: 1, units: Units.OUNCE},
      { ingredient: Juices.LIME, quantity: 0.75, units: Units.OUNCE}, 
      { ingredient: SyrupsAndSweeteners.FALERNUM, quantity: 0.5, units: Units.OUNCE},
    ],
    preparation: [
      Preparations.CRUSHED_ICE,
      Preparations.COMBINE,
      Preparations.STIR
    ],
    servedIn: Vessels.HIGHBALL,
    servedWithIce: true,
    garnishes: [
      Garnishes.MINT,
      Garnishes.NUTMEG
    ]
  }, 
  {
    name: "Chrysanthemum",
    ingredients: [
      { ingredient: Spirits.VERMOUTH_FRENCH, quantity: 2, units: Units.OUNCE},
      { ingredient: Spirits.BENEDICTINE, quantity: 0.75, units: Units.OUNCE},
      { ingredient: Spirits.ABSINTHE, quantity: 1, units: Units.TEASPOON},
    ],
    preparation: [
      Preparations.SHAKE
    ],
    servedIn: Vessels.COCKTAIL,
    servedWithIce: false,
    garnishes: [
      Garnishes.ORANGE_EXPRESSED
    ]
  }, 
  {
    name: "Clover Club",
    ingredients: [
      { ingredient: Spirits.GIN_LONDON, quantity: 1.5, units: Units.OUNCE},
      { ingredient: Spirits.VERMOUTH_FRENCH, quantity: 0.5, units: Units.OUNCE},
      { ingredient: Juices.LEMON, quantity: 0.5, units: Units.OUNCE},
      { ingredient: SyrupsAndSweeteners.RASPBERRY, quantity: 0.5, units: Units.OUNCE},
      { ingredient: MiscellaneousIngredients.EGG_WHITE, quantity: 1, units: Units.OTHER}
    ],
    preparation: [
      Preparations.DRY_SHAKE,
      Preparations.SHAKE
    ],
    servedIn: Vessels.COCKTAIL,
    servedWithIce: false,
    garnishes: [
      Garnishes.RASPBERRY
    ]
  }, 
  {
    name: "Coffee Cocktail",
    ingredients: [
      { ingredient: Spirits.PORT_RUBY, quantity: 2, units: Units.OUNCE},
      { ingredient: Spirits.BRANDY, quantity: 1, units: Units.OUNCE},
      { ingredient: SyrupsAndSweeteners.SUGAR, quantity: 1, units: Units.TEASPOON},
      { ingredient: MiscellaneousIngredients.EGG, quantity: 1, units: Units.OTHER}
    ],
    preparation: [
      Preparations.DRY_SHAKE,
      Preparations.SHAKE
    ],
    servedIn: Vessels.COCKTAIL,
    servedWithIce: false,
    garnishes: [
      Garnishes.NUTMEG
    ]
  }, 
  {
    name: "Corn 'n' Oil",
    ingredients: [
      { ingredient: Spirits.RUM_AGED, quantity: 2, units: Units.OUNCE},
      { ingredient: SyrupsAndSweeteners.FALERNUM, quantity: 0.5, units: Units.TEASPOON},
      { ingredient: Bitters.ANGOSTURA, quantity: 2, units: Units.DASH},
    ],
    preparation: [
      Preparations.CRUSHED_ICE,
      Preparations.STIR
    ],
    servedIn: Vessels.ROCKS,
    servedWithIce: true,
    garnishes: [
      Garnishes.LIME_WEDGE
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
