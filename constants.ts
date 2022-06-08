export enum Vessels {
  COUP = "coup",
  HIGHBALL = "highball",
  MARTINI = "martini",
  MULE = "mule mug",
  ROCKS = "rocks glass",
}

export enum Spirits {
  ABSINTHE = "absinthe",
  AMARO = "amaro",
  APEROL = "aperol",
  APPLEJACK = "applejack",
  BOURBON = "bourbon whiskey",
  BRANDY = "brandy",
  BRANDY_APPLE = "apple brandy",
  CACAO = "creme de cacao",
  CAMPARI = "campari",
  CHARTREUSE_GREEN = "green chartreuse",
  CHARTREUSE_YELLOW = "yellow chartreuse",
  GALLIANO = "galliano",
  GIN_LONDON = "london dry gin",
  GIN_OLD_TOM = "old tom gin",
  MENTHE = "creme de menthe",
  MEZCAL_ANEJO = "añejo mezcal",
  MEZCAL_BLANCO = "blanco mezcal",
  MEZCAL_REPASADO = "repasado mezcal",
  NOYAUX = "creme de noyaux",
  ORANGE = "curaçao or triple sec",
  RYE = "rye whiskey",
  SCOTCH_BLENDED = "blended scotch whiskey",
  SCOTCH_SINGLE_MALT = "single malt scotch whiskey",
  SPARLKING = "sparkling wine",
  TEQUILA_ANEJO = "añejo tequila",
  TEQUILA_BLANCO = "blanco tequila",
  TEQUILA_REPASADO = "repasado tequila",
  VERMOUTH_FRENCH = "dry vermouth",
  VERMOUTH_ITALIAN = "sweet vermouth",
  VIOLETTE = "creme de violette",
  VODKA = "vodka",
  WINE_RED = "red wine",
}

export enum Bitters {
  ANGOSTURA = "angostura bitters",
  ORANGE = "orange bitters",
  PEYCHAUDS = "peychaud's bitters",
}

export enum Juices {
  CRANBERRY = "cranberry",
  GRAPEFRUIT = "grapefruit",
  LEMON = "lemon",
  LIME = "lime",
  ORANGE = "orange",
  PINEAPPLE = "pineapple",
}

export enum SyrupsAndSweeteners {
  FALERNUM = "falernum",
  FASSIONOLA = "fassionola",
  GRENADINE = "grenadine",
  HONEY = "honey",
  LIME_CORDIAL = "lime cordial",
  SIMPLE = "simple syrup",
}

export enum MiscellaneousIngredients {
  CREAM_HEAVY = "heavy cream",
  CREAM_LIGHT = "light cream or half-and-half",
  EGG = "whole egg",
  EGG_WHITE = "egg white",
  ORANGE_FLOWER_WATER = "orange flower water",
}

export enum Preparations {
  COMBINE = "combine in the glass",
  DRY_SHAKE = "shake without ice",
  SHAKE = "shake with ice",
  STIR = "stir with ice",
}

export enum Quantities {
  DASH = "dash",
  FRUIT = "fruit(s) worth of juice",
  OUNCE = "oz.",
  RINSE = "rinse",
  SPLASH = "splash"
}

export enum Garnishes {
  CHERRY = "cherry",
  LEMON_PEEL = "peel of lemon",
  LEMON_WHEEL = "wheel of lemon",
  LIME_WHEEL = "wheel of lime",
}

export type VesselsType = `${Vessels}`;
export type IngredientTypes = `${Spirits}` | `${Bitters}` |`${Juices}` | `${SyrupsAndSweeteners}` | `${MiscellaneousIngredients}`;
export type PreparationTypes = `${Preparations}`;
export type QuantityTypes = `${Quantities}`;
export type IngredientsWithQuantities = { ingredient: IngredientTypes, quanitity: IngredientTypes };
