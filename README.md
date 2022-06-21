# cocktail-drill

## The Shape of the Cocktail

Part of the challenge of this exercise was mapping an unruly data set onto a consistent shape. Many classic cocktails are noteworthy because of their esoteric ingredients and unusual preparation methods; conformity is not easily achieved. I've had to make some decisions about how to taxonomize these cocktails with search and drilling purposes in mind, but I've made an effort not to compromise any details that are paramount to the quality of the drinks. The shape of the data is designed to accommodate the majority of cases. Most cocktails are a set of liquid ingredients combined, served in a glass and garnished. There are countless excpetions and complications, but I have found ways to incorporate most nuances into this basic template. The following sections explain my choices for how to tranpose and organize these recipes for this format.

### Ingredients
The question is not so much "what is an ingredient?" as it is "why is this an ingredient and not a garnish, or even a preparation?" The simple answer, which covers the majority of ingredients that I have categorized as such, is that it is a discrete quantity of liquid that should be added to the other ingredients before the shaking, straining, pouring, etc. commences. This is certainly not the most comprehensive way to account for the contents of a cocktail. In reality, the ingredients ought be taken in the context of a series of steps, which may be more complicated (and more critically sequential) than this definition. 

I have done my best to separate out the ingredients from the methods in which they are assembled in large part because the point of this tool, as I've envisioned it, is training in the recipe contents, not in the nuances of their assembly. Most lesser-used methods of preparation will be either highly memorable in their own right, inextricably associated with the drink itself, somewhat implied by the ingredients, or some combination of the three. The primary reason I've even chosen to include them is that the tool would feel incomplete without that context for reference.

### Preparations
Instructions are  

### Ice
With every recipe, there is a boolean value for "is this served with ice?" For most cases, this means exactly what it seems. If the preparations include the directive to "serve over crushed ice", then this flag is somewhat duplicative, but I think the redundancy is tolerable.

### Garnishes
The ontology of the ˝garnish" is elusive, but I have used the following criteria to distinguish garnishes from preparations and ingredients. 

1. Any garnishes listed are optional. Many of them are traditional and are more than suggestions, but the drink is not incomplete without them.
2. Garnishes are not subject to the precise measurements that should be observed with the ingredients of the drink itself. The length of citrus peeled, the number of blackberries speared, or the amount of nutmeg sprinkled can be left to the mixologists' judgment. We are not relying on these ingredients to impart a significant flavor.
3. The majority of garnishes are solid. The exception is citrus squeezed or expressed, in which cases the fruit is often dropped into the anyway.





